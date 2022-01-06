function Particle(){
  this.pos = createVector(random(width), random(height));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxSpeed = 4;
  this.prevpos = this.pos.copy();
  
  this.update = function(){
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);   
  }
  
  this.applyForce = function(force){
    this.acc.add(force);   
  }
  
  this.show = function(){
    stroke('#0000000f');
    strokeWeight(1);
    //point(this.pos.x, this.pos.y);
    line(this.pos.x, this.pos.y, this.prevpos.x, this.prevpos.y);
    this.prevpos = this.pos.copy();
  }
  
  this.follow = function(vectors){
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    
    var index = x + y * columns;
    var force = vectors[index];
    this.applyForce(force);
  }
  
  this.edges = function(){
    if(this.pos.x > width){
      this.pos.x = 0;
      this.prevpos.x = this.pos.x;
    }
    if(this.pos.x < 0){
      this.pos.x = width;
      this.prevpos.x = this.pos.x;
    } 
    if(this.pos.y > height){
      this.pos.y = 0;
      this.prevpos.y = this.pos.y;
    } 
    if(this.pos.y < 0){
      this.pos.y = height;
      this.prevpos.y = this.pos.y;
    }
    
  }
  
}
