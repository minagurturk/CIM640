
//aarray with line position
//you'll use these values to draw lines
var lines = [0, 0, 400, 0];


function setup() {
    createCanvas(400, 400);
    
    
}


function draw() {
    // frame rate will make it move slower
    frameRate(1);
    
    //i<400 - canvas size
    //i is your counter
    for (var i=0; i<=height; i++) {
        //console.log(i)
        
        
        //ellipse(random(width),random(height), 10,10);
        
        stroke(random(255,0,0));
        // adjust how many times you're drawing the line
        //connecting the line with y axis
        lines[1] = i;
        lines[3] = i;
        
        // 1 and 3 holds y position
         line(lines[0], lines[1], lines[2], lines[3]);
        
   
    }

    linePoints = [0, 0, 400, 0];
}

// drawing 400 lines with the stroke color
//once it reaches the destination, then moves to setup instructions