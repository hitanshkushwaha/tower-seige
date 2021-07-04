const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine, world;
var ground;
var wing;
var block,block2,block3,block4,block5,block6,block7,block8;





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
  //block8=new Block(200,100,70,20);
  
  block=new Block(400,200,20,20)
  block2=new Block(400,200,20,20);
  block7=new Block(400,200,20.20)
  block3=new Block(350,200,20,20);
  block6=new Block(350,200,20,20)
  block4=new Block(450,200,20,20)
   block5=new Block(450,200,20,20)


//box2=new Box2(100,200,20,20)
 wing=new Slingshot(box.body,{x:100,y:200})

 
}

function draw(){


    background("skyblue");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
    rect(ground2.position.x,ground2.position.y,200,20)
    box.display();
    //block8.display();



    block.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
  //  box2.display()
    wing.display()
}
function mouseDragged(){
    Matter.Body.setPosition(box.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    wing.fly();
}