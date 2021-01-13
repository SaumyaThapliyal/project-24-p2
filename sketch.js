const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dropwall1,dropwall2,dropwall3;
var paper;
var ground;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dropwall1 = new Drop(415,655,200,10);
	dropwall2 = new Drop(315,605,10,100);
	dropwall3 = new Drop(515,605,10,100);
	paper = new Paper(50,50,20);

	Engine.run(engine);

	var ground_option= {
		isStatic: true
	  }
	  ground = Bodies.rectangle(400,675,800,30, ground_option);
	  World.add(world,ground);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  dropwall1.showwall();
  dropwall2.showwall();
  dropwall3.showwall();
  paper.showpaper();
  
  rect(ground.position.x, ground.position.y,800,30);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})

	}
}


