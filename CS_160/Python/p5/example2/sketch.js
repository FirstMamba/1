function setup() {
    // put setup code here
    createCanvas(800, 600);
}

function draw() {
    //put drawing code here
    if (mouseIsPressed) {
        fill(220,20,60);
    }
    else {
        fill(0);
    }
    ellipse(mouseX, mouseY, 250, 250)
}
