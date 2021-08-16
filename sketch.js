var ship, ship_rocking;
var sea, seaImage;

function preload(){

  ship_rocking = loadAnimation("ship-1.png", "ship-2.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(200,100,400,20)
  sea.addImage(seaImage);
  sea.scale = 0.4


  ship = createSprite(100,200,20,20);
  ship.addAnimation("rocking", ship_rocking);
  ship.scale = 0.15

  
  
}

function draw() {
  background("blue");

  sea.velocityX = -3;

  if(sea.x < 0 ) {
    sea.x = 200;
  }

  drawSprites();
 
}