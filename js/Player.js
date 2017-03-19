import Resources from './resources'

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
export class Player {
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
      if (movement === 'left') {
         this.x -= 101
      }
   }
}


export let player = new Player(202, 83 * 3 + 55)
