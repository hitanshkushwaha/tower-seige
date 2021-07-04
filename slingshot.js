class Slingshot{
    constructor(bodyA,pointB) {
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:10
        }
        this.wing = Constraint.create(options);
        World.add(world, this.wing);
      }
      display(){
  
     if(this.wing.bodyA!=null){
      var pointA =this.wing.bodyA.position;
      var pointB =this.wing.pointB;
      strokeWeight(4)
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
     }
  
     
       
       
      fly(){
        this.wing.bodyA=null;
      }
     

    
    }; 








 