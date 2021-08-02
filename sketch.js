var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody;
var boxPart1,boxPart2,boxPart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(keyPressed){
  packageSprite.velocityY=-2
  }
  boxPart1=createSprite(400,680,150,10);
  boxPart1.shapeColor="red";
  boxPart2=createSprite(325,635,10,100);
  boxPart2.shapeColor="red";
  boxPart3=createSprite(475,635,10,100);
  boxPart3.shapeColor="red";
  
	
	  if(collide){
		  packageBody.velocityY=0
		  isStatic:true
	  }
  


  
  drawSprites();
}
 


function keyPressed() {
	if (keyCode === DOWN_ARROW){
		Matter.Body.setStatic( packageBody, false);
	}
   
}

function collide(boxPart1, packageBody){
	packageBodyBottomEdge=packageBodyY+packageBody.height;
	boxPart1TopEdge=boxPart1.y
	if(packageBodyBottomEdge>=boxPart1TopEdge){
	return true
	}
    return false;
}
 
  

    

