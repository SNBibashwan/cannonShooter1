class Ground {
  constructor()
  {
      this.body = Bodies.rectangle(width/2,height-20,width,60,{isStatic:true});

      World.add(world,this.body);
  }

  display()
  {
      var pos = this.body.position;
      fill("saddlebrown");
      rectMode(CENTER);
      stroke("darkgreen");
      strokeWeight(8);
      rect(pos.x,pos.y,width + 10,60);
  }
}