var drop = 0;
//var xcordTwo = 0;

function setup() {
    createCanvas(600, 600);
    noStroke();
    
}

function draw() {
    background(0, 10);
    var xcord = {
    x: 0,
    y: 0,
    }
    var xcordTwo = {
    x: random(600),
    }
    for(var i = 0; i < 5; i++){
        fill("blue");
        rect(xcord.x+xcordTwo.x, random(-1000)+drop, 10, 10);
        drop = drop + 0.2;
    }
}
