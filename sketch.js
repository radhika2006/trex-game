var trex,ground,invisibleground,clouds,cactus,score;
var trexrun,trexcollide,groundimage,cloudimage;
var cactusimg1,cactusimg2,cactusimg3,cactusimg4,cactusimg4,cactusimg5,cactusimg6;

function preload(){
  groundimage=loadImage("ground2.png");
  cloudimage=loadImage("cloud.png");
  cactusimg1=loadImage("obstacle1.png");
  cactusimg2=loadImage("obstacle2.png");
   cactusimg3=loadImage("obstacle3.png");
   cactusimg4=loadImage("obstacle4.png");
   cactusimg5=loadImage("obstacle5.png");
   cactusimg6=loadImage("obstacle6.png");
  
  trexcollide=loadImage("trex_collided.png");
  trexrun=loadAnimation("trex1.png","trex3.png","trex4.png");
  
  
}

function setup() {
  
  createCanvas(600, 200);
  
  trex=createSprite(50,180);
  trex.addAnimation("run",trexrun);
  trex.scale=0.6;
  
  ground=createSprite(300,180,600,20);
  ground.addImage(groundimage);
  
  invisibleground=createSprite(300,190,600,20);
  invisibleground.visible=false
  
}

function draw() {
  background("blue");
  
  trex.collide(invisibleground);
  ground.velocityX=-5;
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  //console.log(trex.y);
  if(keyDown("space") && trex.y>151){
    trex.velocityY=-12;
  }
  
  trex.velocityY=trex.velocityY+0.8
  spawnclouds();
  spawncactus();
  

  drawSprites();
  
}
function spawnclouds(){
  if(frameCount % 80==0){
    clouds=createSprite(600,random(80,100),10,10);
    clouds.velocityX=-5;
    clouds.addImage(cloudimage);
    clouds.lifetime=120;
  }

}

function spawncactus(){
  if(frameCount %100==0){
    cactus=createSprite(600,155,10,10);
    cactus.velocityX=-5;
    cactus.lifetime=120;
    
    var num=Math.round(random(1,6));
    
    switch(num){ case 1:cactus.addImage(cactusimg1);
        break;
      case 1:cactus.addImage(cactusimg1);
        break;
         case 2:cactus.addImage(cactusimg2);
        break;
        case 3:cactus.addImage(cactusimg3);
        break;
         case 4:cactus.addImage(cactusimg4);
        break;
         case 5:cactus.addImage(cactusimg5);
        break;
        case 6:cactus.addImage(cactusimg6);
        break;
        default:break;
    }
    cactus.scale=0.6;
  }
}