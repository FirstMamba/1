let bgColor = 0;

function setup() {
    createCanvas(400, 400);
    bgColor = rndC();
    background(bgColor); // r,g,b
}

let height = 50;
let width = 50;

let rectA_x = 0;
let rectA_y = 0;
let rectA_width = 50;
let rectA_height = 50;
let rectA_color = 0;

function rectA() {
    if (key === "q") {
        rectA_color = rndC();
        fill(rectA_color);
    }

    fill(bgColor);
    rect(rectA_x, rectA_y, rectA_width, rectA_height);

    if (keyIsDown(65)) {
        rectA_x -= 1;
    } else if (keyIsDown(68)) {
        rectA_x += 1;
    } else if (keyIsDown(87)) {
        rectA_y -= 1;
    } else if (keyIsDown(83)) {
        rectA_y += 1;
    }

    key = '';
    fill(rectA_color);
    rect(rectA_x, rectA_y, rectA_width, rectA_height);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        width = width - 1;
    } else if (keyCode === RIGHT_ARROW) {
        width = width + 1;
    } else if (keyCode === UP_ARROW) {
        height = height + 1;
    } else if (keyCode === DOWN_ARROW) {
        height = height - 1;
    }
}

function rndC() {
    let r = random(0, 256)
    let g = random(0, 256)
    let b = random(0, 256)
    return color(r, g, b)
}

start = true;

function draw() {
    noStroke();
    rectA();

    if (start) {
        rectA_color = color(255, 255, 255);
        start = false;
    }

    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            rect(mouseX, mouseY, width, height);
        }
        if (mouseButton === RIGHT) {
            ellipse(mouseX, mouseY, width, height);
        }
        if (mouseButton === CENTER) {
            clear();
            background(bgColor); // r,g,b
        }
    }

}