Function.prototype.inherits = function (parent) {
  function Surrogate() {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};


function MovingObject () {
  
}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid (name) {
  this.name = name;
}
Asteroid.inherits(MovingObject);



MovingObject.prototype.helloworld = function () {
  console.log('IF SOMEONE MAKES ME SAY HELLO WORLD ONE MORE TIME');
};