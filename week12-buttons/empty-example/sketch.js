



var interfaceItems = [];

var brushSize = 10;
var brushColor;

function setup(){
  createCanvas(400,400);
  background(0);
    
  brushColor = color(0);
  //buttons
  interfaceItems.push(new interface(10,100,50, color(255)));
  interfaceItems.push(new interface(250,100,100, color(255,0,0)));
    
}


function draw(){ 
  //brush
  noStroke();
  fill(brushColor);
  rect (mouseX, mouseY, brushSize, brushSize);

  interfaceItems[0].check();
  interfaceItems[0].display();
  interfaceItems[1].check();
  interfaceItems[1].display();
  //console.log(interfaceItems[0].check());
}

function mousePressed(){
  if(interfaceItems[0].check() == true){
    console.log("pressed darker button");
    brushSize--;
    brushColor = color(255);  
  }

  if(interfaceItems[1].check() == true){
    brushSize++;
    brushColor = color(255,0,0);  
  }
}


function interface(tempX, tempY, tempBoxSize, tempColor){
  this.x  = tempX;
  this.y = tempY;
  this.boxSize = tempBoxSize;
  this.setFill = tempColor;
  this.overlay = false;

  this.display = function(){
    fill(this.setFill);
    rect(this.x, this.y, this.boxSize, this.boxSize);

    if(this.overlay == true){
      fill(127,200);
      rect(this.x, this.y, this.boxSize, this.boxSize);
    }
  }

  this.check = function(){
    if(mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)){
      this.overlay = true;
      return true;
    }else{
      this.overlay = false;
      return false;
    }
  }

}