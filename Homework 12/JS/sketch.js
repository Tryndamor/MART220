let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let myFont;


function preload()
{
    img = loadImage("Texture/BlackRipple.jpg");
    img1 = loadImage("Texture/BlackWeb.jpg");
    img2 = loadImage("Texture/GrayMesh.jpg");
    img3 = loadImage("Texture/WhiteSwirl.jpg");
    img4 = loadImage("Texture/GrayScale.jpg");
    img5 = loadImage("Texture/BlueDiamond.jpg");

    myFont = loadFont("Font/Battlestar.ttf");
}
function setup() 
{
    createCanvas(600, 800, WEBGL);
}
  
function draw() 
{
    background(200);
    
    push();
    translate(0,0);
    rotateX(frameCount * 0.02);
    rotateY(frameCount * 0.01); //Gray Ring
    texture(img2);
    torus(100, 30, 5, 10);
    pop();

    push();
    translate(0,0);
    rotateX(frameCount * -0.01);
    rotateY(frameCount * -0.02); //Black Ring
    texture(img);
    torus(150, 30, 10, 10);
    pop();

    push();
    translate(-200, -200);
    rotateX(frameCount * 0.1);
    texture(img3);              //Ice Cream
    ellipsoid(25,25,10);
    pop();

    push();
    translate(-200,-130);
    rotateY(frameCount * 0.01); //Ice Cream Cone
    cone(50,60);
    pop();

    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(img1);
    sphere(50, 100);
    pop();

    push();
    rotateY(frameCount * 0.02);
    fill(255);
    textFont(myFont);
    textSize(24);
    text("Trevor Kleh - Assignment 12", -230, -250);
    pop();
}