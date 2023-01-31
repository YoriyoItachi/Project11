var sea,ship
var seaImg ,shipImg

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png")
                            
}

function setup(){
  createCanvas(400,400);
  background("lightblue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg);
  ship.scale =0.50;
  
}

function draw() {
  background(0);
  sea.velocityX =-3;

  
    
  drawSprites();
}