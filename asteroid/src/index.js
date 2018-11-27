console.log('webpack works!');

const MovingObject = require("./moving_object.js");
const Asteroid = require('./asteroid.js');
const Game = require('./game.js')


window.MovingObject = MovingObject;

const fred = new MovingObject({
  pos: [10, 10],
  vel: [2, 3],
  color: "red",
  radius: 10
});

const carl = new Asteroid({
  pos: [20, 20]
});

window.carl = carl;

const jerry = new Game();
window.jerry = jerry

document.addEventListener("DOMContentLoaded", function(event){
  const canvas = document.getElementById("game-canvas");
  const context = canvas.getContext("2d");
  const animateCallback = () => {
    fred.draw(context);
    carl.draw(context);
  };
  
  animateCallback();
}); 

