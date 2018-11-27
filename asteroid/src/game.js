const Asteroid = require('./asteroid.js')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}


function Game() {
  this.DIM_X = 700;
  this.DIM_Y = 500;
  this.NUM_ASTEROIDS = 5;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.randomPosition = function () {
  let x = getRandomInt(700);
  let y = getRandomInt(500);
  return [x, y];
};

Game.prototype.addAsteroids = function() {
  for (let i = 0; i < this.NUM_ASTEROIDS; i++ ) {
    this.asteroids.push(
      new Asteroid({pos: this.randomPosition()})
    );
  }
};


module.exports = Game;