var bird,birdImg


function preload(){
  birdImg=loadImage("Bird 1.gif")
  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
 bird=createSprite(300,300)
bird.addImage ("bird",birdImg)


}

function draw() {
  background("white"); 




 

drawSprites();

}
