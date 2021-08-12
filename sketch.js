const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ball;
var blower;
var blowerMouth;
var button;

function setup() {
  var  Canvas =createCanvas(500, 500);


  engine = Engine.create();
  world = engine.world;

  ball = new Ball(width / 2 + 80, height / 2 - 80, 80, 80);
  blower = new Blower(width / 2 - 50, height / 2 + 50, 150, 20);
 //create a blowermouth object
 blowermouth = new Blowermouth(width / 2 +70, height / 2 + 20, 100, 90);

 //create button from project description

 button=createButton("Click to Blow");
 button.position(width /2,height-100);
 button.class("blowButton");
 button.mousePressed(blow);
}

function draw() {
  background(59);
  Engine.update(engine);

  blower.show();
  ball.show();
  blowermouth.show();
}
//write function blow from project description

function blow (){
  Matter.Body.applyForce(ball.body,{x:0,y:0},{x:0,y:0.05});
}