function MovingObject(options_hash) {
  this.pos = options_hash.pos;
  this.vel = options_hash.vel;
  this.radius = options_hash.radius;
  this.color = options_hash.color;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();
  
  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );
  ctx.fill();  
};

MovingObject.prototype.move = function() {
  const currX = this.pos[0];
  const currY = this.pos[1];
  this.pos = [(currX + this.vel[0]), (currY + this.vel[1])];
};



module.exports = MovingObject;