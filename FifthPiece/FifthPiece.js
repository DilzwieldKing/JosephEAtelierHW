var rand = (random(10))

function setup() {
    createCanvas(600, 600);
    
}

function draw() {
    background(255, 10);
    for(i = 0; i < 10; i++){
        fill(255, 0);
        stroke("Black");
        ellipse(random(275, 325), random(275, 325), random(100, 350));
        ellipse(random(275, 325), random(275, 325), random(775, 825));
        stroke("Red");
        ellipse(random(275, 325), random(275, 325), random(50, 100));
        rectMode(CENTER);
        rect(random(275, 325), random(475, 525), random(1, 50), 400);
        stroke("Black");
        textSize(random(10));
        text('Not Good Enough', random(700), random(700));
        text('Never Good Enough', random(700), random(700));
        text('They are watching you', random(700), random(700));
        text('Oh god why', random(700), random(700));
        text('Its in the water', random(700), random(700));
    }
}