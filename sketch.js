const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Sling = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
var polygon1,sling;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  //nivel uno
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //nivel dos
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //nivel tres
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //parte superior
  block16 = new Block(390,155,30,40);

block1b = new Block(620,180,30,40);
block2b = new Block(650,180,30,40);
block3b = new Block(680,180,30,40);
block4b = new Block(710,180,30,40);
block5b = new Block(740,180,30,40);
block6b = new Block(770,180,30,40);

block7b = new Block(650,140,30,40);
block8b = new Block(680,140,30,40);
block9b = new Block(710,140,30,40);
block10b = new Block(740,140,30,40);

block11b = new Block(680,100,30,40);
block12b = new Block(710,100,30,40);

block13b = new Block(695,60,30,40);

Sling = new Sling(this.polygon1,{x:100,y:200});


}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block11b.display();
  block12b.display();
    fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block1b.display();
  block2b.display();
  block3b.display();
  block4b.display();
  block5b.display();
  block6b.display();
    fill("turquoise");
  block13.display();
  block14.display();
  block15.display(); 
  block7b.display();
  block8b.display();
  block9b.display();
  block10b.display();
  fill("grey");
  block16.display();
  block13b.display();
 

}
