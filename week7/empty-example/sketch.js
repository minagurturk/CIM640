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
    fill(232,170,96);
    
    
    // front legs
     rect(centerX , centerY + 120, 20, 50, 12);
     rect(centerX -19, centerY + 118, 20, 51, 12);
    
     rect(centerX +60, centerY + 120, 20, 50, 12);
     rect(centerX +75, centerY + 120, 20, 51, 12);
    
    //body
     ellipse(centerX+27,centerY+70, 170,80);

    //face
    fill(232,170,96);rect(centerX, centerY, 100, 100);

    //nose
    fill(0);
    rect(centerX, centerY + 12, 10, 12);
    
    //eyes
    fill(255);
    rect(centerX - 13, centerY - 8, 15, 15);
    rect(centerX + 13, centerY - 8, 15, 15);

    fill(0);
    ellipse(centerX - 13, centerY - 7, 8, 8);
    ellipse(centerX + 13, centerY - 7, 8, 8);
    rectMode(CENTER);
    
    //mouth
    fill(255,152,201);
    rect(centerX, centerY + 30, 40, 30, 35);
    //tongue
    fill(255,0,0);
    rect(centerX , centerY + 39, 15, 30, 35);
    
    

    noFill();
    arc(centerX, centerY-2, 120, 0, PI);
    strokeWeight(40);
    arc(centerX, centerY-2, 120, 100, PI, TWO_PI);
    
   
  


    
    
}