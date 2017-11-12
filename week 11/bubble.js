//set variables that are modular 
var bubbleX = 200;
var bubbleY = 200;
var bubbleSize = 50;

//array of bubbles
var multibubble =[];

function setup () {
createCanvas (400,400);    
    
//to generate 1000 bubbles
    for(var i=0; i<100; i++){
        var bubbleC = color(random(256), random(256), random(256));
        multiBubble.push(new bubble(random(width), random(height), random(100), bubbleC,true));
        //direction x moves ++
    }
    
}

function draw () {
//displaying the bubble you created 
    display();
// to move
    move();
//= updating the characteristics
    console.log(checkPos());    

multiBubble[49].display();
            
            
            
// to loop through the entire array, printing
for(var i = 0; i = multiBubble.lenght; i++){
    multiBubble[i].display();
    multiBubble[i].moveX();
    multiBubble[i].moveY();
         
if multiBubble[i].checkPosX() == 0 {
    //moves it back to zero, reset, popping up at 0,0
    multiBubble[i].dirtX = false; 
}else if{
    
    
    
    
}
    //to make it randomly
    //multiBubble.x = random(width);
    
}
    if multiBubble[i].checkPosY() == true {
    //moves it back to zero, reset, popping up at 0,0
    multiBubble.y = 0;
    //once you pass 400 it resets the position
//to make it randomly
    //multiBubble.x = random(height);

}
}

        //first, second, third variable
function bubble(tempX, tempY, tempDiameter,c, tempDirX, tempDirY) {

    this.x = tempX;
    this.y = tempY;
    this.diameter = tempDiameter;
    this.color = c;
    this.dirX = tempDirX;
    this.dirY = tempDirY;    
}



//calling the function
function display () {
    fill(this.color);
    //creating the bubble
    ellipse(bubbleX, bubbleY, bubbleSize, bubbleSize);
    
      
}

    this.moveX = function () {
        this.x++;
    }
    
    //check position
     this.checkPosX = function () {
         if(this.x>width){
             if 
         }
       
         this.checkPosY = function () {
         if(this.y>height){
            // return true;
             //first condition
             return 0;
         } else if (this.x <0) {
             return 1;
         } else {
             return -1;
             
         }
         }
         
      
    
    
     this.moveY = function () {
        this.y++;
    }
     
     
     
     
    
function move () {
    bubbleX++;
}


//distance
function checkPos (){
    if (bubbleX>width) {
        return true;
    }else{
        return false;
    }
    }
}