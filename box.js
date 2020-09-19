class Box {
  constructor(x,y,width,height) {
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("box.png");
    World.add(world, this.body);
  }

  
  display(){
    if (this.body.speed<3){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    }
    else {
      World.remove(world,this.body);
      push()
      this.visibility=this.visibility-5
    tint(255,this.visibility)
    imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,50,50);
      
      pop ()
    }

    
  
    
  }
}
