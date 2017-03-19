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

   static initialPosition() {
      return new Player(Game.col(3), Game.row(5))
   }

   update() {
      if (this.wins()) {
         let { x, y } = Player.initialPosition()
         this.x = x
         this.y = y
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
         if (this.x > Game.col(1)) {
            this.x -= Game.CELL_WIDTH
         }
         break
      case 'right':
         if (this.x < Game.col(5)) {
            this.x += Game.CELL_WIDTH
         }
         break
      case 'up':
         this.y -= Game.CELL_HEIGHT; break
      case 'down':
         if (this.y < Game.row(5)) {
            this.y += Game.CELL_HEIGHT
         }
         break
      }

      return this
   }
}
