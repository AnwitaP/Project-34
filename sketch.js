const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var superhero, superheroImg;
var monster, monsterImg;
var string;

function preload() {
  backgroundImg = loadImage("images/GamingBackground.png")
  superheroImg = loadImage("images/Superhero-01.png");
  monsterImg = loadImage("images/Monster-01.png");
}

function setup() {
  createCanvas(7000, 800);

  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(600, 600, 1200, 20);

   block1 = new Block(900,100,70,70);
   block2 = new Block(900,100,70,70);
   block3 = new Block(900,100,70,70);
   block4 = new Block(900,100,70,70);
   block5 = new Block(900,100,70,70);
   block6 = new Block(900,100,70,70);
   block7 = new Block(800,100,70,70);
   block8 = new Block(800,100,70,70);
   block9 = new Block(800,100,70,70);
   block10 = new Block(800,100,70,70);
   block11 = new Block(800,100,70,70);
   block12 = new Block(800,100,70,70);
   block13 = new Block(700,100,70,70);
   block14 = new Block(700,100,70,70);
   block15 = new Block(700,100,70,70);
   block16 = new Block(700,155,70,70);
   block17 = new Block(700,100,70,70);
   block18 = new Block(700,100,70,70);
   block19 = new Block(700,100,70,70);
   block20 = new Block(700,100,70,70);

   superhero = new Superhero(500, 200, 80, 80);

   monster = new Monster(1100, 300, 150, 150);

   string = new Fly(superhero.body, {x: 500, y: 50}); 
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();

  superhero.display();

  monster.display();

  string.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX, y: mouseY});

}

