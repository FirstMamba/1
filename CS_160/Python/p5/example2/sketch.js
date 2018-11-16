function setup() {
    // put setup code here
    createCanvas(1200, 800);
    background(128, 0, 0);
    
}

function draw() {
    //put drawing code here
    if (mouseIsPressed) {
        fill(0);
    if (scroll) {
        rotate(scale);
    }
    }
    else {
        fill(126, 140, 162);
    }
    ellipse(mouseX, mouseY, 250, 250)
    rect(mouseX, mouseY, 125, 125)
    rect(scrollX, screenY, 30, 30);
    angle +=0.1;
}
