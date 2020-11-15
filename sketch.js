var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var lhsBoxBody, lhsBoxSprite, rhsBoxBody, rhsBoxSprite, bottomBoxBody, bottomBoxSprite;
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

	helicopterSprite=createSprite(width/4, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,15);
	groundSprite.shapeColor=color(255)

	bottomSprite=createSprite(390,660,100,20);
	bottomSprite.shapeColor=color("red");

	lhsBoxSprite=createSprite(330,620,20,100);
	lhsBoxSprite.shapeColor=color("red");

	rhsBoxSprite=createSprite(450,620,20,100);
	rhsBoxSprite.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 15 , {isStatic:true} );
 	World.add(world, ground);

	bottomBoxBody = Bodies.rectangle(400,670,100,20, {isStatic:true});
	World.add(world, bottomBoxBody);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x=helicopterSprite.x

  bottomBoxSpriteX=bottomBoxBody.position.x
  bottomBoxSpriteY=bottomBoxBody.position.y
  keyPressed();
  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
 }
 if(keyCode === LEFT_ARROW){
	 helicopterSprite.x=helicopterSprite.x-10;
	 translation={x:-10,y:0}
	 Matter.Body.translate(packageBody,translation);
 }
 if(keyCode === RIGHT_ARROW){
	helicopterSprite.x=helicopterSprite.x+10;
	translation={x:+10,y:0}
	Matter.Body.translate(packageBody,translation);
}
}