
var knightFrames = [];
var currentFrame = 0;
var frameDelay = 5;
var timer = 0;

function preload()
{
    for (let i = 1; i <= 10; i++) 
    {
        let path = `AnimationAssets/Attack (${i}).png`;
        knightFrames.push(loadImage(path));
    }
}
function setup()
{
    createCanvas(800,800);
}

function draw()
{
    background(200);
    updateAnimation();
    renderKnightImage();
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
    image(knightFrames[currentFrame], 100, 100);
}

function titleText()
{
    textSize(32);
    fill(0,102, 153);
    textAlign(CENTER, TOP);
    text("Trevor Kleh - Animated Knight",width / 2, 20)
}
