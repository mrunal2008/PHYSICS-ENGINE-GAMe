class BulletObj{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 100
        }
       
        this.pointB = pointB;
        this.bullet = Constraint.create(options);
        World.add(world, this.bullet);
    }

    attach(bodyA){
        flag = "red";
        this.bullet.bodyA = bodyA;
    }

    fly(){
        this.bullet.bodyA = null;       
    }

    display(){
        if(this.bullet.bodyA){
            var pointA = this.bullet.bodyA.position;
                  
            this.pointB.x = launchX;
            this.pointB.y = launchY;
            //var pointB = this.pointB; 
        }
    }
    
}