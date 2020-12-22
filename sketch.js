
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const setStatic = Matter.Body

var position;
var boy,boyImage;
var ground;
var stone,slingShot;
var tree;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;

function preload()
{
	boyImage = loadImage("boy.png");
	
	
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.
	ground = new Ground(600,height,1400,20);
	boy = createSprite(190,525,50,80)
	boy.addImage(boyImage)
	boy.scale = 0.1;
	stone = new Stone(235,420,30)
	slingShot = new Slingshot(stone.body,{x:135,y:460});
	tree = new Tree(1000,300,300,300);
	tree.scale = 0;
	mango1 = new Mango(800,170,30);
	mango2 = new Mango(1000,180,30);
	mango3 = new Mango(1200,160,45);
	mango4 = new Mango(900,160,20);
	mango5 = new Mango(1000,90,40);
	mango6 = new Mango(800,250,30);
	mango7 = new Mango(1000,250,30)
	mango8 = new Mango(1100,250,35);

}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  text("Press space to get second chance!!",100,20);
  tree.depth = stone.depth+1
  drawSprites();
  boy.display();
  ground.display();
  stone.display();
  slingShot.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
 
 decectollision();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
	slingShot.fly();
	
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(stone.body);
    }
}
function decectollision(stone,mango){
	mangoBodyPosition=mango.body.position
	stoneBodyPosition=stone.body.position
	

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=mango.r+stone.r){
		Matter.body.setStatic(mango.body,false)
  
		decectollision(stone,mango1);
		decectollision(stone,mango2);
		decectollision(stone,mango3);
		decectollision(stone,mango4);
		decectollision(stone,mango5);
		decectollision(stone,mango6);
		decectollision(stone,mango7);
		decectollision(stone,mango8);
	}
}



