var frameArray = [];
var counter = 0;


//if you make the interval smaller it will run faster
var interval = 1000;

var prevMillis = 0;

function setup(){

    createCanvas(500,500);
//series of frames
    
    frameArray[0] = loadImage("assests/Thatwasclose0.jpg");
    frameArray[1] = loadImage("assests/Thatwasclose1.jpg");
    frameArray[2] = loadImage("assests/Thatwasclose2.jpg");
    frameArray[3] = loadImage("assests/Thatwasclose3.jpg");

    
    //when you have 1000 images you want to load
    for (var i = 0; i<4; i ++){
        var lString = "assets/Thatwasclose" + i + "jpg."
        frameArray[i] = loadImage(lString);
    }

}

function draw(){
   // frameRate(1);
    console.log(millis());
    image(frameArray[counter],0,0);
    
    
    // if the millis = 1000, increase by one
    // more precise >= not ==
    // when the program starts millis 0 - 0 = 0
    if (millis() - prevMillis >= interval){
        //last time running
        preMillis = millis();
        counter++
    }
    
    
    
    
    
    counter++;
    if(counter == frameArray.length){
       counter = 0;
       }
    ellipse (mouseX,mouseY, 10,10);
}