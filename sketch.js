const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg ,BG;
var sleep,brush,gym, bath;
var eat,drink,move;
var astronaut;

function preload(){
bg = loadImage("Images/iss.png");
sleep= loadImage("Images/sleep.png");
brush = loadImage("Images/brush.png");
gym= loadImage("Images/gym1.png", "Images/gym2.png","Images/gym11.png", "Images/gym12.png");
eat= loadImage("Images/eat1.png", "Images/eat2.png");
drink= loadImage("Images/drink1.png", "Images/drink2.png");
move= loadImage("Images/move.png", "Images/move1.png");
bath= loadImage("Images/bath1.png", " Images/bath2.png");
}

function setup() {
  createCanvas(600,400);
 
  engine= Engine.create();
  world= engine.world();
 

  var astronaut_options= {
    restitution: 0.95,
    velocityX: 2
  }
  
  astronaut=Bodies.rectangle(400, 200, 50, 90, astronaut_options);
  astronaut.addImage("sleeping", sleep);
  astronaut.size= 0.1; 
  World.add(world,astronaut);
  rectMode(CENTER);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  if (keyDown ("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y= 350;
    astronaut.velocityX = 0;
    astronaut.velocityY= 0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gymming", gym);
    astronaut.changeAnimation("Gymming");
    astronaut.y= 350;
    astronaut.velocityX = 0;
    astronaut.velocityY= 0;
  }

    if (keyDown("RIGHT_ARROW")){
      astronaut.addAnimatio ("bathing", bath);
      astronaut.changeAnimation("bathing");
      astronaut.y= 350;
      astronaut.velocityX = 0;
      astronaut.velocityY= 0;
    }
    
      if (keyDown("LEFT_ARROW")){
        astronaut.addAnimation("eating", eat);
        astronaut.changeAnimation("eating");
        astronaut.y= 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
      }

      if (keyDown("M")){
        astronaut.addAnimation("Moving", move);
        astronaut.changeAnimation("Moving");
        astronaut.y= 350;
        astronaut.velocityX = 0;
        astronaut.velocityY= 0;
      }
      
      CreateEdgeSprites();
      //astronaut.bounceOff(edges);
      rect(astronaut.position.x,astronaut.position.y,400,200);
       drawSprites();
       }



