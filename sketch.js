const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var snowbackgroundIMG1,snowbackgroundIMG2,snowbackgroundIMG3;
var engine,world;
var rand;
var snowobject1,snowobject2;
var rand2;

function preload(){
  snowbackgroundIMG1 = loadImage("snow1.jpg");
  snowbackgroundIMG2 = loadImage("snow2.jpg");
  snowbackgroundIMG3 = loadImage("snow3.jpg");
}

function setup() {
  var canves = createCanvas(800,400);
  rand = Math.round(random(1,3))
  engine = Engine.create();
  world = engine.world;
  snowobject1 = new snowflake(Math.round(random(0,800)),0,20,20);
  snowobject2 = new snowflake(Math.round(random(0,800)),0,20,20);
}

function draw() {
  if(rand === 1){
    background(snowbackgroundIMG1);
  }
  else if(rand === 2){
    background(snowbackgroundIMG2);
  }
  else{
    background(snowbackgroundIMG3);
  }
  Engine.update(engine);
  snowobject1.display();
  snowobject2.display();
  drawSprites();
}