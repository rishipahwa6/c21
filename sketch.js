var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
 

  gameo1 = createSprite(100,100,50,50);
  gameo1.shapeColor = "orange";

  gameo2 = createSprite(400,100,50,50);
  gameo2.shapeColor = "orange";

  gameo2.velocityY = 5;
  gameo3 = createSprite(300,100,50,50);
  gameo3.shapeColor = "orange";

  gameo4 = createSprite(400,100,50,50);
  gameo4.shapeColor = "orange";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  /*if (isTouching(movingRect,gameo3) || isTouching(movingRect,gameo1) || isTouching(movingRect,gameo2) || isTouching(movingRect,gameo4)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";*/
 
  bounceOff(movingRect, gameo2);
  drawSprites();
}
