class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
     }

     this.body = Bodies.rectangle(x,y,width,height,options);
     this.width = width;
     this.height = height;

     this.tank = loadImage("assets/tank.png");

     World.add(world,this.body);
    };

    display(){
      var pos = this.body.position;
      image(this.tank,pos.x,pos.y,this.width,this.height)
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look

      

      //rectMode(CENTER);
      //rect(pos.x,pos.y,this.width,this.height);

    };
}
//arc(pos.x,pos.y - 100, this.width, this.width);