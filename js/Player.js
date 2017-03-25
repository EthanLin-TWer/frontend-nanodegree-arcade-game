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
      return movement.move(this)
   }
}