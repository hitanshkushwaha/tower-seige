const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
    var engine, world;
     var ground;





function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

   
    var ground2_options ={
        isStatic:true
    }

    var ground_options ={
        isStatic: true
    }

    ground= Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);

    ground2=Bodies.rectangle(400,300,200,20,ground2_options);
    World.add(world,ground2);
    
  box=new Box();
  block8=new Block(200,100,70,20);




  block=new Block(400,200,20,20)
  block2=new Block(400,200,20,20);
  block7=new Block(400,200,20.20)
  block3=new Block(350,200,20,20);
  block6=new Block(350,200,20,20)
  block4=new Block(450,200,20,20)
  block5=new Block(450,200,20,20)

 slingshot = new Slingshot(box.bodyA,block8.bodyB);
 
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(ground2.position.x,ground2.position.y,200,20)
    box.display()
    block8.display()


slingshot.display()
    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display()
    block6.display()
    block7.display()
}
