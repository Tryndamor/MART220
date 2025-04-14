let img, img1, img2, img3, img6, myFont, sword;
let shapes = [];

function preload() 
{
  img = loadImage("Texture/BlackRipple.jpg");
  img1 = loadImage("Texture/BlackWeb.jpg");
  img2 = loadImage("Texture/GrayMesh.jpg");
  img3 = loadImage("Texture/WhiteSwirl.jpg");
  img6 = loadImage("Texture/Sword_Base.png");
  sword = loadModel("3DModel/Sword.obj");
  myFont = loadFont("Font/Battlestar.ttf");
}

function setup() 
{
  createCanvas(600, 800, WEBGL);

  shapes = 
  [
    { type: 'torus', tex: img2, size: [100, 30, 5, 10], rot: [0.02, 0.01], speed: 0.01, floating: false, position: createVector(0, 0, 0) },
    { type: 'torus', tex: img,  size: [150, 30, 10, 10], rot: [-0.01, -0.02], speed: 0.015, floating: false, position: createVector(0, 0, 0) },
    { type: 'ellipsoid', tex: img3, size: [25, 25, 10], rot: [0.1, 0], speed: 0.005, floating: false, position: createVector(0, 0, 0) },
    { type: 'cone', tex: null, size: [50, 60], rot: [0, 0.01], speed: 0.02, floating: false, position: createVector(0, 0, 0) },
    { type: 'sphere', tex: img1, size: [50, 100], rot: [0.01, 0.01], speed: 0.012, floating: false, position: createVector(0, 0, 0) }
  ];
}

function draw() {
  background(200);

  let orbitRadius = 250;
  let angleStep = TWO_PI / shapes.length;

  for (let i = 0; i < shapes.length; i++) 
    {
    let s = shapes[i];
    push();

    let angle = frameCount * s.speed + i * angleStep;
    let x = cos(angle) * orbitRadius;
    let z = sin(angle) * orbitRadius;

                                                                         // If floating, adjust the orbit position with the new random position
    if (s.floating) 
    {
      x += s.position.x;
      z += s.position.z;
    }

    translate(x, 0, z);
    rotateX(frameCount * s.rot[0]);
    rotateY(frameCount * s.rot[1]);
    if (s.tex) texture(s.tex);

    if (s.type === 'torus') torus(...s.size);
    else if (s.type === 'ellipsoid') ellipsoid(...s.size);
    else if (s.type === 'cone') cone(...s.size);
    else if (s.type === 'sphere') sphere(...s.size);
    pop();
    }

                                                                        // Title text
  push();
  rotateY(frameCount * 0.02);
  fill(255);
  textFont(myFont);
  textSize(24);
  text("Trevor Kleh - Assignment 13", -230, -250);
  pop();

                                                                        // Sword in the center
  push();
  translate(0, -50);
  scale(15);
  texture(img6);
  rotateY(frameCount * 0.02);
  model(sword);
  pop();
}

function mousePressed() 
{
                                                                        // Pick 2 random shapes and move them to new positions
  let indices = [];
  while (indices.length < 2) 
    {
    let r = floor(random(shapes.length));
    if (!indices.includes(r)) indices.push(r);
    }

                                                                        // Move selected shapes to random positions
  for (let i of indices) 
    {
    let s = shapes[i];
    s.floating = true;
    s.position = createVector(
      random(-250, 250),
      random(-150, 150),
      random(-200, 200)
    );
    }
}
