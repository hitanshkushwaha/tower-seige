class Box{
   constructor(){
      var options={
          "restitution":0.8,
          "friction":0.3,
          "density":1.0


      
      }
      this.body=Bodies.rectangle(100,100,50,50,options);
      this.width=50;
      this.height=50;
      World.add(world,this.body);

    
    }
display(){
    var pos=this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    
    push();
    translate(pos.x,pos.y);
    
    fill("yellow");
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
}


}
