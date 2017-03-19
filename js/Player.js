// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
   constructor() {

   }

   update() {

   }

   render() {

   }

   handleInput() {

   }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
   var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
   };

   player.handleInput(allowedKeys[e.keyCode]);
});

export let player = new Player()
