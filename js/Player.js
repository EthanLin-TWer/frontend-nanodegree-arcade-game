import Resources from './resources'
import { Game } from './constants'

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
      if (this.wins()) {
         this.x = 202
         this.y = 83 * 3 + 55
      }
   }

   wins() {
      return this.y === Game.row(0)
   }

   render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
   }

   handleInput(movement) {
      switch (movement) {
      case 'left':
         this.x -= Game.CELL_WIDTH; break
      case 'right':
         this.x += Game.CELL_WIDTH; break
      case 'up':
         this.y -= Game.CELL_HEIGHT; break
      case 'down':
         this.y += Game.CELL_HEIGHT; break
      }

      return this
   }
}
