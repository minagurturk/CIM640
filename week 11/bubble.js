//set variables that are modular 
var bubbleX = 200;
var bubbleY = 200;
var bubbleSize = 50;



function setup () {
createCanvas (400,400);    
    
    
    
}

function draw () {
//displaying the bubble you created 
    display();
// to move
    move();
//= updating the characteristics
    console.log(checkPos());    


}





//calling the function
function display () {
    //creating the bubble
    ellipse (bubbleX,bubbleY,bubbleSize, bubbleSize);
    
      
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