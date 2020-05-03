class TankHead {
    constructor(x, y, width, height) {
        var options = {
        isStatic: true
       }
  
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
  
       this.tank = loadImage("assets/tankHead.png");
  
       World.add(world,this.body);
      };
  
      display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        
        rotate(angle);
        
        image(this.tank,pos.x,pos.y,this.width,this.height)
        
      };
  }