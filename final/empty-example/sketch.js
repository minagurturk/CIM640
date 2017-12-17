

var img1;


function preload () {
    img1 = loadImage("ads.jpg");
   
   
}

var videoRef;
var canvas;
var videoPlaying;

var video1;
var video2;
var video2Playing;


var video3;
var video3Playing;



function setup () {
    canvas = createCanvas(1200,800);
    //card 2 and video 2
  	video1 = createVideo("./videos/video2.mp4");
    video1.size(1200, 800);
  	videoPlaying = false;
  	video1.hide();
    
    video2 = createVideo("./videos/video3.mp4");
    video2.size(1200, 800);
  	video2Playing = false;
  	video2.hide();
    
      video3 = createVideo("./videos/video1.mp4");
    video3.size(1200, 800);
  	video3Playing = false;
  	video3.hide();
    
   
  
}

function draw () {
    background(255);
    image(img1, 10,0,1100,800);
  

}

function mousePressed () {
    
  if (videoPlaying) {
    video1.stop();
    video1.hide();
    canvas.show();
    videoPlaying = false;
    return;
           
} else if (video2Playing) {
    
    video2.stop();
    video2.hide();
    canvas.show();
    video2Playing = false;
    return;
} else if (video3Playing) {
    
    video3.stop();
    video3.hide();
    canvas.show();
    video3Playing = false;
    return;
}

   
      
      
  
   // dividing the row into 2 
   // floor: integer range 
  var row = Math.floor(mouseY/400);
  console.log(row);
  
    // dividing into 3
  var column = Math.floor(mouseX/400);
  console.log(column);
  
  //top row, middle column
  if (row == 0 && column == 1) {
    video1.show();
    video1.loop();
    canvas.hide();
    videoPlaying = true;        
      
      
      //zones
} else if (row == 0 && column == 2) {
    video2.show();
    video2.loop();
    canvas.hide();
    video2Playing = true; 
    
} else if (row == 1 && column == 1) {
    video3.show();
    video3.loop();
    canvas.hide();
    video3Playing = true; 
} 
}


          
          