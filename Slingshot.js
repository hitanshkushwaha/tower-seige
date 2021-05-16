class Slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.04,
            length : 10

        }
       this.Slingshot = Constraint.create(options);
       World.add(world,this.slingshot);

    }
  display(){
var posA = this.slingshot.bodyA.position;
var posB = this.slingshot.bodyB.position;
strokeWeight(4);
line(posA.x,posA.y,posB.x,posB.y);
  }   
}