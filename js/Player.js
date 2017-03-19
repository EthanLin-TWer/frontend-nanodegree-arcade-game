import { Game } from "./constants";
import { Movable } from "./Movable";

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
export class Player extends Movable {
   constructor(x, y) {
      super(x, y, 'images/char-boy.png')
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
      return this.y === Game.TOP_BOUNDARY
   }

   handleInput(movement) {
      switch (movement) {
      case 'left':
         if (Game.withinLeftBoundary(this.x)) {
            this.move(-Game.CELL_WIDTH, 0)
         }
         break
      case 'right':
         if (Game.withinRightBoundary(this.x)) {
            this.move(Game.CELL_WIDTH, 0)
         }
         break
      case 'up':
         if (Game.withinTopBoundary(this.y)) {
            this.move(0, -Game.CELL_HEIGHT)
         }
         break
      case 'down':
         if (Game.withinBottomBoundary(this.y)) {
            this.move(0, Game.CELL_HEIGHT)
         }
         break
      }

      return this
   }

}
