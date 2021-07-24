class TankerHead {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true,
        
       }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image2= loadImage("Iron Man.png"); 
      World.add(world, this.body);
      };
  
      display(){
        var pos = this.body.position;
        var angle = this.body.angle; 
        angleMode(DEGREES);
       //console.log(angle);
       
        if (keyIsDown(LEFT_ARROW) && angle<=1 && angle>-28) {
          angle -= 1;
         
          Matter.Body.setAngle(this.body, angle);
      }
      if (keyIsDown(RIGHT_ARROW)&& angle>=-28 && angle<1) {
          angle += 1
          Matter.Body.setAngle(this.body, angle);
      }
      launchX = 0 + ((this.height + 20) * cos(angle))
      console.log(angle);
      launchY = pos.y - ((this.height - 20) * sin(angle))
 
    
      if (keyIsDown(32)) {
          Matter.Body.setPosition(bullet1.body, { x: launchX-168 , y: launchY-40 })
      }
      if (keyIsDown(32) && angle<-11) {
        Matter.Body.setPosition(bullet1.body, { x: launchX-120, y: launchY-20 })
    }
    if (keyIsDown(32) && angle<-11 && angle>-20) {
      Matter.Body.setPosition(bullet1.body, { x: launchX-100 , y: launchY-60 })
    }
        if (keyIsDown(32) && angle<-20 && angle>-30) {
         Matter.Body.setPosition(bullet1.body, { x: launchX-70 , y: launchY-80 })
    }
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        imageMode(CENTER);
        image(this.image2,0,0, this.width, this.height);
        pop();
      };
  }