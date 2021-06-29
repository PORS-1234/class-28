class slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            //bodyB: bodyB,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        this.pointB=pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
   fly() {
   this.sling.bodyA=null;




   }
}

