function setup() {
    createCanvas(600, 600);
    noStroke();
    
}

function draw() {
    background(255, 1);
    for(i = 0; i < 1; i++){
        rectMode(CENTER);
        fill(0);
        translate(300, 300);
        rotate(frameCount/2);
        rect(200, random(50), random(40), random(40));
        rect(200, random(50), random(30), random(30));
        ellipse(random(5), random(5), random(10));
        fill(0, 20);
        rect(230, random(50), random(100), random(100));
        fill(0, 10);
        rect(300, random(50), random(100), random(20));
    }
    for(a = 0; a < 0.1; a++){
        minHand();
    }
}

function minHand(){
    rotate(frameCount/2);
    rectMode(CORNER);
    fill(0, 10);
    rect(0, 0, random(8, 10, 12), random(90));
    rect(0, 0, random(8, 10, 12), random(130));
    rect(0, 0, random(8, 10, 12), random(170));
}