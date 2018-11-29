function setup() {
    // put setup code here
    createCanvas(550, 450);
    background(0);
}

function draw() {
    //put drawing code here
    if (mouseIsPressed) {
        fill(255, 255, 255, 255, 255);
    }
    else {
        fill(200, 80, 150);
    }
    ellipse(mouseX, mouseY, 50, 50);
}