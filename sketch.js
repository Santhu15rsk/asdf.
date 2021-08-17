const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower,ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(200,390,400,20)
    tower=new Tower(150,218,250,330);
   
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
   tower.display();
   
}
