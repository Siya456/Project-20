const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var particle1;
var particle2;
var particle3;
var particle4;
var particle5;
var particle6;
var particle7;
var particle8;
var particle9;
var particle10;
var rotator1;
var rotator2;
var rotator3;
var block1;
var block2;

var particle11;
var particle12;
var particle13;
var particle14;
var particle15;

var block3;

var angle1=60;
var angle2=60;
var angle3=60;

function setup(){
    var canvas = createCanvas(550,600);
    engine = Engine.create();
    world = engine.world;

    //created plane and block bodies
    var plane_options={
      isStatic: true
    }

    plane = Bodies.rectangle(600,height,1200,20,plane_options);
    World.add(world,plane);
    block1=Bodies.rectangle(100,400,150,20,plane_options);
    World.add(world,block1);
    block2=Bodies.rectangle(400,400,150,20,plane_options);
    World.add(world,block2);

    //I have created an extra block
    block3 = Bodies.rectangle(260,500,150,20,plane_options);
    World.add(world,block3);

    //created multiple of particle bodies 
    var particle_options = {
      restitution:0.4,
      friction:0.02
    }

    particle1 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle1);
    particle2 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle2);
    particle3 = Bodies.circle(225,10,10,particle_options);
    World.add(world,particle3);
    particle4 = Bodies.circle(230,10,10,particle_options);
    World.add(world,particle4);
    particle5 =Bodies.circle(230,10,10,particle_options);
    World.add(world,particle5);

    //I added more particles

    particle6 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle6);
    particle7 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle7);
    particle8 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle8);
    particle9 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle9);
    particle10 = Bodies.circle(220,10,10,particle_options);
    World.add(world,particle10);

    //I have added more particles that come later

    particle11 = Bodies.circle(220,-50,10,particle_options);
    World.add(world,particle11);
    particle12 = Bodies.circle(220,-50,10,particle_options);
    World.add(world,particle12);
    particle13 = Bodies.circle(220,-50,10,particle_options);
    World.add(world,particle13);
    particle14 = Bodies.circle(220,-50,10,particle_options);
    World.add(world,particle14);
    particle15 = Bodies.circle(220,-50,10,particle_options);
    World.add(world,particle15);

    var rotator_options={
      isStatic:true
    };

    rotator1 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator1);

    rotator2 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator2);

    rotator3 = Bodies.rectangle(250,200,150,20,rotator_options);
    World.add(world,rotator3);

    //styling the bodies here
    fill("blue");
    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background("pink");
    Engine.update(engine);

    block3.x=mouseX;

  //created shape for plane and stand
  rect(plane.position.x,plane.position.y,1200,20);
  rect(block1.position.x,block1.position.y,150,20);
  rect(block2.position.x,block2.position.y,150,20);
  rect(block3.position.x,block3.position.y,150,20)

  //created shape for all the paticles
  ellipse(particle1.position.x,particle1.position.y,10);
  ellipse(particle2.position.x,particle2.position.y,10);
  ellipse(particle3.position.x,particle3.position.y,10);
  ellipse(particle4.position.x,particle4.position.y,10);
  ellipse(particle5.position.x,particle5.position.y,10);

  //I made the shape for the new particles I made
  ellipse(particle6.position.x,particle6.position.y,10);
  ellipse(particle7.position.x,particle7.position.y,10);
  ellipse(particle8.position.x,particle8.position.y,10);
  ellipse(particle9.position.x,particle9.position.y,10);
  ellipse(particle10.position.x,particle10.position.y,10);

  //I made the shape for the particles that fall later

  ellipse(particle11.position.x,particle11.position.y,10);
  ellipse(particle12.position.x,particle12.position.y,10);
  ellipse(particle13.position.x,particle13.position.y,10);
  ellipse(particle14.position.x,particle14.position.y,10);
  ellipse(particle15.position.x,particle15.position.y,10);

  //created shape for all the rotators
  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=0.2;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=0.3;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=0.4;
    
}
