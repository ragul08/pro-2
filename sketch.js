var sea,sea1
var ship,ship1

function preload(){
    ship1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
   sea1=loadImage("sea.png")
}
function setup(){
  createCanvas(400, 400);
background("blue")


sea=createSprite(400,200,600,10)
sea.addImage(sea1)
sea.scale=0.3


ship=createSprite(130,200,20,50)
ship.addAnimation("running",ship1)
ship.scale=0.25

}
function draw() {
    background(0)
 
    sea.velocityX=-3
  if (sea.x < 0) { 
    sea.x= sea.width / 8
  }


  drawSprites()
}
