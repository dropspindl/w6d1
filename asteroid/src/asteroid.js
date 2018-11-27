const Util = require('./utils.js');

const MovingObject = require('./moving_object.js')

function Asteroid(options_hash) {
  
  const pos = options_hash.pos;
  MovingObject.call(this, {
    color: "grey",
    pos: pos,
    radius: 20,
    vel: Util.randomVec(5)
  });
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;


