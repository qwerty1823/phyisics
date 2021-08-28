const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World
var engine, world
var ground
var ball

function setup() {
  createCanvas(400,400);
engine = Engine.create()
world = engine.world
var ground_option = {
  isStatic : true
}
ground = Bodies.rectangle(200,380,400,20,ground_option)
World.add(world,ground)
var ball_option = {
  restitution : 0.5
}
ball = Bodies.circle(180,100,20,ball_option)
World.add(world,ball)
}

function draw() {
  background("blue");
  Engine.update(engine)
  rectMode(CENTER)
  fill("brown")
  rect(ground.position.x,ground.position.y,400,40)
  fill("red")
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}