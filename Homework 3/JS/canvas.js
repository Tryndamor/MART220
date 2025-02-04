PepperoniX = [150,170,200,210,280,300,350,150,210,220,280,330,330]
PepperoniY = [200,170,200,150,150,200,210,310,370,310,310,280,340]
PepperoniD = [30,20,35,40,50,50,40,35,40,50,40,30,50]

speedX= [3,2];
speedY= [2,3];

var x = 100
var y = 100

var mouseClickX = -1
var mouseClickY = -1


function setup()
{
    createCanvas(500,500);
}

function draw ()
{
    background(90,90,90);
    drawPizza();
    movement();
    mouseClick();
    movePepperonis();
    titleAndName();
}

function drawPizza()
{
    fill (210,180,140);
    strokeWeight(2);
    stroke(0,0,0);                  //Crust
    circle (250,250,350);
    
    fill (245, 175, 60);
    stroke(139,0,0);
    strokeWeight(2);
    circle (250,250,300);           //Cheese

    line (250,100,250,400);         //Slice cuts
    line (100,250,400,250);

    fill(180,50,20)                 //ALL PEPPERONIS
    for (let i = 0; i < PepperoniX.length; i++)
    {
        circle (PepperoniX[i],PepperoniY[i],PepperoniD[i]);
    }
}

function movePepperonis()
{
    PepperoniX[0] += speedX[0];  //Moving Pepperoni 0 at speed dedicated to spot 0 in collection.
    PepperoniY[0] += speedY[0];

    PepperoniX[1] += speedX[1];
    PepperoniY[1] += speedY[1]; //Moving Pepperoni 1 at speed dedicated to spot 0 in collection.

    if (PepperoniX[0] > width || PepperoniX[0] < 0) 
    {
        speedX[0] *= -1;  
    }
    if (PepperoniY[0] > height || PepperoniY[0] < 0) 
    {
        speedY[0] *= -1;  
    }

    if (PepperoniX[1] > width || PepperoniX[1] < 0) 
    {
        speedX[1] *= -1;  
    }
    if (PepperoniY[1] > height || PepperoniY[1] < 0) 
    {
        speedY[1] *= -1;  
    }
}

function titleAndName()
{
    fill(180,50,20);
    textSize (20);
    text ("Trevor Kleh", width-120, height-20);
    text ("Delicious Pepperoni Pizza", 10, 30);
}

function movement() 
{
    fill(20, 24, 40);
    stroke(0)
    square(x, y, 50);

    if (keyIsPressed) 
    {
        if (key === 'a') x -= 5;  // Left
        if (key === 'd') x += 5;  // Right
        if (key === 'w') y -= 5;  // Up
        if (key === 's') y += 5;  // Down
    }
}

function mouseClick()
{
    if(mouseIsPressed)
    {
    mouseClickX = mouseX;
    mouseClickY = mouseY;
    }
    fill(0,180,0);
    stroke(0,20,0);
    square(mouseClickX,mouseClickY,25);
}