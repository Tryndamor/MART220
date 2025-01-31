let pepperoniPositions = [];
let olivePositions = [];

function setup() {
  createCanvas(400, 400);
  // Initial random positions for toppings
  for (let i = 0; i < 8; i++) {
    pepperoniPositions.push(createVector(200 + cos(TWO_PI / 8 * i) * 80, 200 + sin(TWO_PI / 8 * i) * 80));
  }
  for (let i = 0; i < 5; i++) {
    olivePositions.push(createVector(random(130, 270), random(130, 270)));
  }
}

function draw() {
  background(220);

  // Title in the upper left
  textSize(24);
  text("My Delicious Pizza", 20, 30);

  // Pizza Base
  fill(255, 204, 102);
  ellipse(200, 200, 300, 300);

  // Tomato Sauce
  fill(255, 80, 80);
  ellipse(200, 200, 270, 270);

  // Cheese
  fill(255, 230, 100);
  ellipse(200, 200, 250, 250);

  // Pepperoni Toppings (move randomly on mouse press)
  fill(200, 0, 0);
  for (let i = 0; i < pepperoniPositions.length; i++) {
    ellipse(pepperoniPositions[i].x, pepperoniPositions[i].y, 40, 40);
  }

  // Olive Toppings (random placement)
  fill(0);
  for (let i = 0; i < olivePositions.length; i++) {
    ellipse(olivePositions[i].x, olivePositions[i].y, 20, 20);
  }

  // Name in the lower-right corner
  textSize(18);
  textAlign(RIGHT, BOTTOM);
  text("Your Name", width - 10, height - 10);
}

function mousePressed() {
  // Move pepperoni randomly when mouse is pressed
  for (let i = 0; i < pepperoniPositions.length; i++) {
    pepperoniPositions[i] = createVector(random(100, 300), random(100, 300));
  }
}

function keyPressed() {
  // Move olive toppings when a key is pressed
  for (let i = 0; i < olivePositions.length; i++) {
    olivePositions[i] = createVector(random(130, 270), random(130, 270));
  }
}
