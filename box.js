class Box{
   constructor(){
      var options={
          "isStatic":false,
          "restitution":0.8,
          "friction":1,
          "density":1.2


      
      }
      this.body=Bodies.rectangle(100,100,50,50,options);
      this.width=50;
      this.height=50;
      World.add(world,this.body);

    
    }
display(){
    var pos=this.body.position;
    var angle=this.body.angle
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("yellow");
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
}


}
