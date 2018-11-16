function setup() {
    // put setup code here
    createCanvas(1200, 800);
    background(128, 0, 0);
    
}

function draw() {
    //put drawing code here
    if (mouseIsPressed) {
        fill(0);

    }
    else {
        fill(126, 140, 162);
    }
    ellipse(mouseX, mouseY, 250, 250)
    rect(mouseX, mouseY, 125, 125)
    Text("Hello", 27, 90)
}
