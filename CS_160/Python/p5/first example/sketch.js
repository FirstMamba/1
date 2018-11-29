function setup() {
  // put setup code here
  createCanvas(800, 600);
  background(150, 150, 150);
}

function draw() {
  //put drawing code here
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill(255, 255, 255, 255);
  }
  ellipse(mouseX, mouseY, 80, 80)
}
