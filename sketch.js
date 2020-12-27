
var monkey , monkey_running
var banana ,bananaImage, obstacleImage
var FoodGroup, obstacleGroup,ground
var survialTime=0,score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300)

  monkey=createSprite(40,245,10,10)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(400,280,900,10);
  ground.velocityX=-4;
  ground.x= ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  
  
}


function draw() {
background("white")
  
  
  stroke("black");
  textSize(20)
  fill("black")
  text("Score:"+score,500,30)
  
  stroke("black  ")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,10,30)
  
  
  if(ground.x>0){
  ground.x= ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-7 
  
  } 
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  spawnFruit();
  spawnObstacle();
  drawSprites();
}

function spawnFruit(){
  if (frameCount%60===0){
    banana=createSprite(600,245,10,10);
    banana.scale=0.1;
    banana.addImage(bananaImage); 
  banana.y=Math.round(random(40,150));
  banana.velocityX=-7
  banana.setLifetime=100;

bananaGroup.add(banana);
}
}
   
function spawnObstacle(){
  if(frameCount%150===0){
  var obstacle=createSprite(600,239,100,100);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2
     obstacle.velocityX=-5
    obstacle=Math.round(random(200, 50))
  }
}




