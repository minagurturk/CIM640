var posX = 0;
var posY = 0;

function setup() {
    createCanvas(1000, 500);
    background("red");
   
//    posX = width/2;
//    posY = height/2;

    posX = 250;
    posY = 300;


}

function draw() {
    fill("blue");
    ellipse(posX, posY, 100, 100);
    fill("green");
    rect(posX -25, posY + 20, 50, 20);
    fill(255);
    ellipse(posX-10, posY-20, 10, 40);
    ellipse(posX+10, posY-20, 10, 40);
    fill(0,255,0);
    ellipse(posX-10, posY-20, 10, 20);
    ellipse(posX+10, posY-20, 10, 10);
    stroke("cyan");
    strokeWeight(5);
    point(posX + 10,posY + 10);
    stroke(125,0,0);
    line(posX - 25, posY + 30, posX + 25, posY + 30);
    noFill();
    arc(posX, posY, 100, 100, PI, TWO_PI);
}