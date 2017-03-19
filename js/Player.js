import Resources from './resources'

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
   constructor(x, y) {
      this.x = x
      this.y = y
      this.sprite = 'images/char-boy.png'
   }

   update() {

   }

   render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
   }

   handleInput(movement) {

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

export let player = new Player(202, 83 * 3 + 55)
