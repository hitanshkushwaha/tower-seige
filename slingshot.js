class Slingshot{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10

        }
       this.Slingshot = Constraint.create(options);
       World.add(world,this.Slinghshot);

    }
      display(){
          var posA =this.Slingshot.bodyA.position;
          var posB = this.Slingshot.pointB.positio;
          strokeWeight(4);
          line(posA.x,posA.y,posBx,posB.y);

      }
      fly(){
        this.Slingshot.bodyA=null;
    }    
    }