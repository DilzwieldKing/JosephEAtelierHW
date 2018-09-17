var move = 300;
var rot = 1;

function setup() {
    createCanvas(600, 600);
    noStroke();
}

function draw() {
    for(var i = 0; i < 1; i++){
        fill(random(255), random(255), random(255));
        translate(300, 300);
        rotate(frameCount/10);
        rect(0+move, 0, 10, 10);
        rect(0-rot, 0, 10, 10);
        move = move + 0.1
        rot = rot +1

    }

}
