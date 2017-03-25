import Resources from './resources'
import { Game } from './Game'
import { Direction } from './Direction'

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
      // todo: bad smell: switch


      if (movement === Direction.LEFT.direction) {
         this.x -= Game.CELL_WIDTH
      }

      if (movement === Direction.RIGHT.direction) {
         this.x += Game.CELL_WIDTH
      }

      if (movement === Direction.UP.direction) {
         // todo: learn move fields refactor
         this.y -= Game.CELL_HEIGHT
      }

      if (movement === Direction.DOWN.direction) {
         this.y += Game.CELL_HEIGHT
      }

      return this
   }
}