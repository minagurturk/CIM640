Breast Cancer / Health & Wealth Deck 
To bring awareness to breast cancer, 6 ads will be placed in different parts of the screen as playing cards. Informational videos and stories will appear when the user clicks on some of the cards in the deck.

The design of the ads will be similar to playing cards to give a sense of gambling. 

For example, you may click the sign in a card and the story of a woman may be watched or heard. 


1.Placing the ads/img

function preload

2. Dividing the Canvas
mathfloor - 2 rows, mouseY and 4 columns, mouseX
canvas size 1200,800 - 6 playing cards
//var row = Math.floor(mouseY/400) 2 rows
// var column = Math.floor(mouseX/400) 3 columns

show/loop/hide canvas and videos

3. Placing the Videos

variables for different videos
download videos and add into the folder
Imovie - true stories as sliding text 
createVideo function

4. Clicking on the Ads 
show and hide - mouseclicked
      
Hiding the videos
function setup - hide or show videos 
boolean true and false stop/hide 

if the mouse is clicked on card #2, video appears loops, and hides again on click

  if (row == 0 && column == 1) 
    set variables for each video - video1.show();
                                   video1.loop();
                                   canvas.hide();
   boolean set true and false for videos / videoPlaying = true
   
    


