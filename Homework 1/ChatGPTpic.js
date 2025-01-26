function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  
    // Draw the pizza base
    fill(255, 204, 102);
    ellipse(200, 200, 300, 300);
  
    // Draw the tomato sauce
    fill(255, 80, 80);
    ellipse(200, 200, 270, 270);
  
    // Draw the cheese
    fill(255, 230, 100);
    ellipse(200, 200, 250, 250);
  
    // Draw toppings (pepperoni)
    fill(200, 0, 0);
    for (let i = 0; i < 8; i++) {
      let angle = TWO_PI / 8 * i;
      let x = 200 + cos(angle) * 80;
      let y = 200 + sin(angle) * 80;
      ellipse(x, y, 40, 40);
    }
  
    // Draw toppings (olives)
    fill(0);
    for (let i = 0; i < 5; i++) {
      let x = random(130, 270);
      let y = random(130, 270);
      ellipse(x, y, 20, 20);
    }
  }
  