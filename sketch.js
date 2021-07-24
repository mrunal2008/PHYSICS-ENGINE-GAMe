const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var launchX, launchY

var ground;
var bullet1;
var flag = "start"
var bullet1;

function preload(){
	ironman1 = loadImage("Iron Man.png");
}

function setup() {
	createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,580);
	enemy1 = new Ultron(800,100);
	enemy2 = new WinterSoldier(600,300);
  enemy3 = new Thanos(1050,300);

  bullet1 = new Bullet(500,500);
  bullet2 = new BulletObj(bullet1.body,{x:10, y:500});
  tankerhead = new TankerHead(50,400,200,300);
  
}


function draw() {

  Engine.update(engine);

  rectMode(CENTER);
  background(0);
  
  ground.display();
  enemy1.display();
  enemy2.display();
  enemy3.display();
  bullet1.display();
  tankerhead.display();
  bullet2.display();

  if (keyIsDown(32)) {
    bullet2.attach(bullet2.body)
}
}	

function keyReleased() {
  // Call the shoot method for the cannon.
  if (keyCode === (32)) {
      flag = "launch"

      bullet2.fly()
  }
}

