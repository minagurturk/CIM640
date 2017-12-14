var videoRef;
var canvas;
var videoPlaying;

function setup () {
    canvas = createCanvas(1200,800);
  	video = createVideo("./videos/catalogue.mp4");
  	video.size(1200, 800);
  	videoPlaying = false;
  	video.hide();
}

function draw () {
    background(0);
}

function mousePressed () {
  if (videoPlaying) {
    video.stop();
    video.hide();
    canvas.show();
    videoPlaying = false;
    return;
  }
   // dividing the row into 2 
  var row = Math.floor(mouseY/400);
  console.log(row);
  
    // dividing into 3
  var column = Math.floor(mouseX/400);
  console.log(column);
  
  //top row, middle column
  if (row == 0 && column == 1) {
    video.show();
    video.loop();
    canvas.hide();
    videoPlaying = true;
  } 
}