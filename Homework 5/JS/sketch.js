var knightFrames = [];
var currentFrame = 0;
var frameDelay = 5;
var timer = 0;
var food;
var knightX = 400, knightY = 100, knightWidth = 100, knightHeight = 100;
var foodWidth = 60, foodHeight = 60;

function preload() 
{
    for (let i = 1; i <= 10; i++) 
    {
        let path = `AnimationAssets/Attack (${i}).png`;
        knightFrames.push(loadImage(path));
    }
    food = new FoodClass(200, 200);
}

function setup() 
{
    createCanvas(800, 800);
}

function draw() 
{
    background(200); 
    updateAnimation();
    renderFood(); 
    renderKnightImage();  
    knightMovement();
    checkFoodCollision();
    titleText();
}

function updateAnimation() 
{
    timer++;
    if (timer >= frameDelay) 
    {
        currentFrame = (currentFrame + 1) % knightFrames.length;
        timer = 0;
    }
}

function renderKnightImage() 
{
    image(knightFrames[currentFrame], knightX, knightY, knightWidth, knightHeight);
}

function knightMovement() 
{
    if (keyIsDown(65)) 
    {                   // A key (left)
        knightX -= 5;
    }
    if (keyIsDown(68)) 
    {                   // D key (right)
        knightX += 5;
    }
    if (keyIsDown(87)) 
    {                   // W key (up)
        knightY -= 5;
    }
    if (keyIsDown(83)) 
    {                   // S key (down)
        knightY += 5;
    }
}

function renderFood() 
{
    food.display();
}

function checkFoodCollision() 
{
    if (food.checkCollision(knightX, knightY, knightWidth, knightHeight)) 
    {
        food.randomizePosition();  
    }
}

function titleText() 
{
    textSize(32);
    fill(0,102, 153);
    textAlign(CENTER, TOP);
    text("Trevor Kleh - Animated Knight", width / 2, 20);
}
