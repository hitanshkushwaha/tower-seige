class Block{
    constructor(x,y,height,angle){
        var options={
     
      
       
        
     
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    this.height=50;
    this.width=40;
    World.add(world,this.body);
       
   

  }
display(){
  var pos=this.body.position;
  var angle = this.body.angle;
  push();
  translate(pos.x,pos.y);
  rotate(angle);
  fill("blue");
  rectMode(CENTER)
  rect(0,0,this.width,this.height);
  pop();
}


}
