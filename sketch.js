var ball,img,paddle;

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
  ball = createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX = 0;  
  
  paddle = createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
  
}

function draw() {
  background(205,153,0);
  
  fill("red");
  textSize(20);
  text("Press SPACE to start game",90,100);
    
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,explosion);
  
  paddle.collide(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW)){
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.y = paddle.y + 20;
  }
  
  if(keyDown("space") && ball.x === 60){
    ball.velocityX = 9;
    paddle.x = 350;
    paddle.y = 200;
  }
  
  if(ball.x > 400){
    ball.x = 60;
    ball.y = 200;
    ball.velocityX = 0;
    ball.velocityY = 0;
    paddle.x = 350;
    paddle.y = 200;
  }
  
  drawSprites();
  
}

function explosion(){
  ball.velocityY=random(-8,8);
}

