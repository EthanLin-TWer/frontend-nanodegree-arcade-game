import Resources from './resources'
import { Game } from './game-constants'

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
      switch (movement) {
      case 'left':
         this.x -= Game.CELL_WIDTH
         break
      case 'right':
         this.x += Game.CELL_WIDTH
         break
      case 'up':
         this.y -= Game.CELL_HEIGHT
         break
      case 'down':
         this.y += Game.CELL_HEIGHT
         break
      }

      return this
   }
}


export let player = new Player(202, 83 * 3 + 55)
