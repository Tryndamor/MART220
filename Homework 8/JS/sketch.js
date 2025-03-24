var knightFrames = { attack: [], idle: [] };
var currentFrame = 0;
var frameDelay = 5;
var timer = 0;
var food;
var badFood;
var knightX = 400, knightY = 100, knightWidth = 100, knightHeight = 100;
var foodWidth = 60, foodHeight = 60;
var attackPath = [];
var idlePath = [];
var foodTimer = 0;
var foodDelay = 120;
var score = 0;
var countdown = 60;
var gameIsOver = false;
var backgroundSound;
var badFoodSound;
var goodFoodSound;
var health = 4;
var immovableWidth = 50, immovableHeight = 50; 
var immovableObjects = [];


function preload() 
{
    idlePath = loadStrings("./AnimationAssets/Idle.txt");
    attackPath = loadStrings("./AnimationAssets/Attack.txt");
    food = new FoodClass(200, 200);
    badFood = new BadFoodClass(300,300);
    backgroundSound = loadSound("./Sounds/trap-beats.mp3");
    badFoodSound = loadSound("./Sounds/Bad-Noise.mp3");
    goodFoodSound = loadSound("./Sounds/Good-Noise.mp3");
}

function setup() 
{
    createCanvas(800, 800);
    frameRate(60);
    generateImmovableObjects();
    for (var i = 0; i < idlePath.length; i++)
    {
        knightFrames.idle[i] = loadImage(idlePath[i]);
    }
    for (var i = 0; i < attackPath.length; i++)
    {
        knightFrames.attack[i] = loadImage(attackPath[i]);
    }
    gameIsOver = false;
}


function draw() 
{
    if (!gameIsOver) 
    {
        background(200); 
        updateAnimation();
        updateFoodMovement();
        renderImmovableObjects();
        renderFood(); 
        renderBadFood();
        renderKnightImage();  
        knightMovement();
        checkFoodCollision();
        checkBadFoodCollision();
        displayScore(); 
        titleText();
        updateCountdown(); 
        displayHealthBar();
        checkWinCondition();

    } 
    else 
    {
    if (score >= 10) {
        displayWinMessage(); 
    } else {
        displayGameOver(); 
    }
    }
}

function updateAnimation() 
{
    timer++;
    if (timer >= frameDelay) 
    {
        currentFrame = (currentFrame + 1) % getCurrentKnightFrames().length;
        timer = 0;
    }
}

function updateFoodMovement()                                    // Randomize food position
{
    foodTimer++;
    if(foodTimer >= foodDelay)
    {
        food.randomizePosition();
        badFood.randomizePosition();                          
        foodTimer = 0
    }
}

function renderKnightImage() 
{
    var currentFrames = getCurrentKnightFrames();
    image(currentFrames[currentFrame], knightX, knightY, knightWidth, knightHeight);
}

function knightMovement() 
{
    var newX = knightX;
    var newY = knightY;

    if (keyIsDown(65)) newX -= 5; // A key
    if (keyIsDown(68)) newX += 5; // D key
    if (keyIsDown(87)) newY -= 5; // W key
    if (keyIsDown(83)) newY += 5; // S key

    var canMove = true;
    for (var i = 0; i < immovableObjects.length; i++) {
        if (collideRectRect(newX, newY, knightWidth, knightHeight, 
            immovableObjects[i].x, immovableObjects[i].y, immovableWidth, immovableHeight)) {
            canMove = false;
            break;
        }
    }

    if (canMove) {
        knightX = newX;
        knightY = newY;
    }
}
function renderImmovableObjects() 
{
    fill(100); 
    for (var i = 0; i < immovableObjects.length; i++) {
        rect(immovableObjects[i].x, immovableObjects[i].y, immovableWidth, immovableHeight);
    }
}

function renderFood() 
{
    food.display();
}
function renderBadFood()
{
    badFood.display();
}

function checkFoodCollision()                                   // This is checking the collision of the knight to the food
{
    if (collideRectRect(knightX, knightY, knightWidth, knightHeight, food.x, food.y, foodWidth, foodHeight))
    {
        food.randomizePosition();  
        score++;                                                // Adds to the score 
        goodFoodSound.play();
    }
}

function checkBadFoodCollision()                               // This is checking the collision of the knight to the bad food
{
    
    if (collideRectRect(knightX, knightY, knightWidth, knightHeight, badFood.x, badFood.y, foodWidth, foodHeight))
    {
        badFood.randomizePosition();
        score--;
        health--;                                            // Decrement the score
        badFoodSound.play();

        if (health <= 0) {
            gameIsOver = true; // End the game if health reaches 0
        }
    }
}

function displayScore()
{
    textSize(32);
    fill(0,102,153);
    textAlign(CENTER, TOP);
    text("Score:" + score, 550,100);                            // Displays the Score of collected foods
}

function updateCountdown()                                      // Updates Countdown from 60 -> 0
{
    if (countdown > 0)
    {
        countdown -= 1 / 60;
    }
    else
    {
        countdown = 0;
        gameIsOver = true;
    }
    displayCountdown();
}

function displayCountdown()
{
    textSize(32);
    fill(0, 102, 153);
    textAlign(RIGHT, TOP);
    text("Time: " + Math.floor(countdown), 310, 100);           // Displays Countdown

}

function displayGameOver() 
{
    background(200); 
    textSize(64);
    fill(255, 0, 0);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);                   // Display game over message after 60 seconds
    textSize(32);
    text("Final Score: " + score, width / 2, height / 2 + 50);  // Displays Final Score after 60 seconds
}

function titleText() 
{
    textSize(32);
    fill(0,102, 153);
    textAlign(CENTER, TOP);
    text("Trevor Kleh - Animated Knight", width / 2, 20);       //This is showing the Title of the game at the top
}

function getCurrentKnightFrames()
{
    if (keyIsDown(65) || keyIsDown(68) || keyIsDown(87) || keyIsDown(83))
    {
        return knightFrames.attack;                             // Return attack frames if any movement key is pressed
    }
    else
    {
        return knightFrames.idle;                               // Return idle frames if no movement key is pressed
    }
}

function mouseClicked() 
{
   backgroundSound.play();
   backgroundSound.loop();
   backgroundSound.setVolume(0.2);
}

function displayHealthBar() 
{
    var barWidth = 200; 
    var barHeight = 30; 
    var x = 300; 
    var y = 50; 

    
    fill(200);
    rect(x, y, barWidth, barHeight);

    
    var healthWidth = (health / 4) * barWidth; 
    fill(255, 0, 0); 
    rect(x, y, healthWidth, barHeight);

    textSize(20);
    fill(0);
    text("Health", 290, 55);
}

function checkWinCondition() 
{
    if (score >= 10) {
        gameIsOver = true; 
        displayWinMessage(); 
    }
}

function displayWinMessage() 
{
    background(200);
    textSize(64);
    fill(0, 255, 0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2); 
    textSize(32);
    text("Final Score: " + score, width / 2, height / 2 + 50); 
}

function generateImmovableObjects() 
{
    immovableObjects = []; 
    for (var i = 0; i < 3; i++) 
    { 
        immovableObjects.push
        ({
            x: random(width - immovableWidth),
            y: random(height - immovableHeight)
        });
    }
}

