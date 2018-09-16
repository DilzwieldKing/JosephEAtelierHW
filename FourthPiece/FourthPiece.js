var a = 10;

function setup() {
    createCanvas(600, 600);
    //noStroke();
    
}

function draw() {
    for(i = 0; i < 10; i++){
        translate(300, 300);
        rotate(a);
        rect(0, 0, 10, 60);
    }
}
