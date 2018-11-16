function setup() {
	// put setup code here
  createCanvas(800,600);
}

function draw() {
	//put drawing code here
	if (mouseIsPressed) {
		fill(0);
  }
  else {
    fill(0, 0, 255, 160);
  }
  ellipse(mouseX,mouseY,80,80)
}
