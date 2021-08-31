
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, paper1, ground, dustbin1, dustbin2, dustbin3; 
var slingshot;
function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    paper1 = new Paper(700,600, 10);
    ground = new Ground(800,680,1600,20);
    dustbin1 = new Dustbin(1300,660, 100, 20);
    dustbin2 = new Dustbin(1240,620,20,100);
    dustbin3 = new Dustbin(1350,620,20,100)

    slingshot = new Slingshot(paper1.body,{x:190,y:100})
    

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background('#123456');
  
 
    
  paper1.display();

  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  slingshot.display();

  
}

//function keyPressed(){
//    if (keyCode === UP_ARROW ) {
//      Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
//    }
// }

function mouseDragged() {
  Matter.Body.setPosition(paper1.body, {x: mouseX, y: mouseY });
}

function mouseReleased(){
  slingshot.fly();
}