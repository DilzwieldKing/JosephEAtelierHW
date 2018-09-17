//Code was modified from the 'particle' example sketch from class.

var mouseclicks = [];

function setup() {
    createCanvas(720, 480);
    noStroke();
    
}

function draw() {
    background(0, 50);
    for(var i = 0; i < mouseclicks.length; i++){
        fill(255, 200+mouseclicks[i].size);
        ellipse(mouseclicks[i].x, mouseclicks[i].y, mouseclicks[i].size);
        mouseclicks[i].y = mouseclicks[i].y + mouseclicks[i].speed;
        mouseclicks[i].size = mouseclicks[i].size + mouseclicks[i].speed;

    }
}

function mouseClicked(){
    var clickposition = {
        x: mouseX,
        y: mouseY,
        speed: -2,
        //time: 0.5
        size: 10,
    }
    mouseclicks.push(clickposition);
}
