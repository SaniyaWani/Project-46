
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var monkey;

function preload()
{
	bgImage=loadImage("bg.png");
	tree = loadImage("tree.png");
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;
	

	//invisible ground.
	iground1  = new invisibleGround (50,  windowHeight-100,50,20);
	iground2  = new invisibleGround (160, windowHeight-70, 50,20);
	iground3  = new invisibleGround (270, windowHeight-50, 90,20);
	iground4  = new invisibleGround (370, windowHeight-70, 50,20);
	iground5  = new invisibleGround (470, windowHeight-90, 50,20);
	iground6  = new invisibleGround (570, windowHeight-80, 50,20);
	iground7  = new invisibleGround (670, windowHeight-90, 50,20);
	iground8  = new invisibleGround (770, windowHeight-130,50,20);
    iground9  = new invisibleGround (870, windowHeight-90,50,20);
    iground10 = new invisibleGround (970, windowHeight-110,90,20);
    iground11 = new invisibleGround (1070,windowHeight-90,50,20);
    iground12 = new invisibleGround (1170,windowHeight-90, 50,20);
    iground13 = new invisibleGround (1270,windowHeight-70, 50,20);
	iground14 = new invisibleGround (1370,windowHeight-120,50,20);
//	iground15 = new invisibleGround (1470,windowHeight-110,50,20);
	iground16 = new invisibleGround (1370,windowHeight-110,50,20);
	iground16 = new invisibleGround (1270,windowHeight-140,50,20);
    iground17 = new invisibleGround (1170,windowHeight-160,50,20);
    iground18 = new invisibleGround (1070,windowHeight-180,50,20);
    iground19 = new invisibleGround (970, windowHeight-200,50,20);
    iground20 = new invisibleGround (870, windowHeight-220,50,20);
	iground21 = new invisibleGround (770, windowHeight-240,50,20);
	iground22 = new invisibleGround (670, windowHeight-260,50,20);	
	iground23 = new invisibleGround (570, windowHeight-260,50,20);
    iground24 = new invisibleGround (470, windowHeight-260,50,20);
    iground25 = new invisibleGround (370, windowHeight-260,50,20);


	

	//ground.
	ground1  = new Ground (50,  windowHeight-80, 50,20);
	ground2  = new Ground (160, windowHeight-50, 50,20);
	ground3  = new Ground (270, windowHeight-30, 50,20);
	ground4  = new Ground (370, windowHeight-50, 50,20);
	ground5  = new Ground (470, windowHeight-70, 50,20);
	ground6  = new Ground (570, windowHeight-60, 50,20);
	ground7  = new Ground (670, windowHeight-70, 50,20);
	ground8  = new Ground (770, windowHeight-90, 50,20);
	ground9  = new Ground (870, windowHeight-70,50,20);
	ground10 = new Ground (970, windowHeight-70,50,20);
	ground11 = new Ground (1070,windowHeight-90,50,20);
	ground12 = new Ground (1170,windowHeight-70, 50,20);
	ground13 = new Ground (1270,windowHeight-80, 50,20);
	ground14 = new Ground (1370,windowHeight-100,50,20);
	//ground15 = new Ground (1470,windowHeight-90, 50,20);
	ground16 = new Ground (1270,windowHeight-120,50,20);
 	ground17 = new Ground (1170,windowHeight-140,50,20);
    ground18 = new Ground (1070,windowHeight-160,50,20);
    ground19 = new Ground (970, windowHeight-180,50,20);
	ground20 = new Ground (870, windowHeight-200,50,20);
	ground21 = new Ground (770, windowHeight-220,50,20);
	ground22 = new Ground (670, windowHeight-240,50,20);
	ground23 = new Ground (570, windowHeight-240,50,20);
    ground24 = new Ground (470, windowHeight-240,50,20);
    ground25 = new Ground (370, windowHeight-240,50,20);
	ground26 = new Ground (270, windowHeight-240,50,20);
	ground27 = new Ground (170, windowHeight-240,50,20);
	ground28 = new Ground (70,  windowHeight-240,50,20);
	ground29 = new Ground (20,  windowHeight-240,50,20);

	monkey = new Monkey(260,650,10,10);
	
	stone = new Stone(600,350);
	rope = new SlingShot (stone.body,{x:600,y:350});


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
	rectMode(CENTER);
	background(bgImage);
	image(tree,-10,90,500,400);
	monkey.display();
	iground1.display();
	ground1.display();
	iground2.display();
	ground2.display();
	iground3.display();
	ground3.display();
	iground4.display();
	ground4.display();
	iground5.display();
	ground5.display();
	ground6.display();	
	ground7.display();
	iground6.display();
	iground7.display();
	ground8.display();
    ground9.display(); 
    ground10.display();
    ground11.display();
    ground12.display();
    ground13.display();
	ground14.display();
//	ground15.display();
	ground16.display();
	iground8 .display(); 
    iground9 .display(); 
    iground10.display(); 
    iground11.display(); 
    iground12.display(); 
    iground13.display(); 
    iground14.display(); 
//	iground15.display();
    iground16.display();
    iground17.display();
    iground18.display();
    iground19.display();
	iground20.display();
	ground17.display();
    ground18.display();
    ground19.display();
	ground20.display();
	ground21.display();
    ground22.display();
    ground23.display();
    ground24.display();
	ground25.display();
	iground21.display();
    iground22.display();
    iground23.display();
    iground24.display();
	iground25.display();
	ground26.display();
    ground27.display();
	ground28.display();
	ground29.display();

	 stone.display();
	 rope.display();

	
	
	
	
  drawSprites();
 
}

function keyIsPressed(){
	console.log("hi");
if(keyCode==32){
	
	Matter.Body.applyForce(monkey.body, monkey.body.position,{x:0,y:-50});
}
}

function keyPressed(){
	if(keyIsDown(RIGHT_ARROW)){
		console.log(monkey);
	//	monkey.velocity.x=2
	monkey.moveRMonkey();
		console.log(monkey.body.velocity.x);
	}
}



 function mouseDragged(){
 	Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
    } 
    function mouseReleased()
    {
 	     rope.fly();
    }

