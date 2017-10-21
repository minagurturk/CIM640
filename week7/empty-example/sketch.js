var centerX = 300;
var centerY = 300;

var bgColor;



function setup() {
    createCanvas(800, 800);
    bgColor = color(255);
 
}

function draw() {
    background(bgColor);

    
    strokeWeight(1);
    stroke(0);
    fill(232,170,96);
    
    
    // front legs
     rect(centerX , centerY + 120, 20, 50, 12);
     rect(centerX -19, centerY + 118, 20, 51, 12);
    
     rect(centerX +60, centerY + 120, 20, 50, 12);
     rect(centerX +75, centerY + 120, 20, 51, 12);
    
    //body
     rect(centerX+27,centerY+70, 145,80,15);

    
    //face
    fill(232,170,96);
    rect(centerX, centerY, 85, 98, 25);

    //nose
    fill(0);
    rect(centerX, centerY + 12, 10, 12,25);
    
    //eyes
    fill(255);
    ellipse(centerX - 13, centerY - 6, 15, 20);
    ellipse(centerX + 13, centerY - 6, 15, 20);

    fill(0);
    ellipse(centerX - 13, centerY - 7, 8, 8);
    ellipse(centerX + 13, centerY - 7, 8, 8);
    rectMode(CENTER);
    
    
    
    //mouth
    fill(0);
    strokeWeight(2);
    rect(centerX, centerY + 30, 30, 5, 35);
    //tongue
    fill(232,149,158);
    rect(centerX , centerY + 41, 15, 30, 35);
    
    //tail 
    stroke(232,170,96);
    fill(232,170,96);
    strokeWeight(1);
    rect(centerX + 103, centerY + 50, 25,10,200);

    noFill();
    arc(centerX, centerY-2, 120, 0, PI);
    strokeWeight(30);
    stroke(232,170,96);
    arc(centerX, centerY-5, 100, 90, PI, TWO_PI);
    
    


    
 
    
    

    
    
}