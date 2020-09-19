class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.image= loadImage("box.png")
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }

  
  display(){
    if (this.body.speed<3){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    }
    else {
      World.remove(world,this.body);
      push()
      this.visibility=this.visibility-5
    tint(255,this.visibility)
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      
      pop ()
    }

    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    
  
    
  }
}
