function setup() {
    // put setup code here
    createCanvas(1200, 800);
    background(0, 42, 172);
    
}

function draw() {
    //put drawing code here
    if (mouseIsPressed) {
        fill(0);
    }
    else {
        fill(178, 34, 34);
    }
    ellipse(mouseX, mouseY, 250, 250)
    rect(mouseX, mouseY, 125, 125)
}
