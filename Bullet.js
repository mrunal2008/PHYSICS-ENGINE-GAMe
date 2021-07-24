class Bullet{
    constructor(x,y){
        var options = {
            "density" :   1.0,
            "friction" : 0.9,
            "restitution" : 4.8,
            "frictionAir":0.008,
            
          }
        this.body = Bodies.rectangle(x,y,50,100, options);
        this.width = 30;
        this.height = 10;
        this.image = loadImage("fire.png");
        World.add(world,this.body);
    }
    display(){   
        if(flag==="launch"){        
            var pos = this.body.position;
        
            push();
            translate(pos.x, pos.y);
            
            //rotate(angle);
            imageMode(CENTER)
            image(this.image,0, 0, this.width, this.height);
            pop();
        }
    }
}