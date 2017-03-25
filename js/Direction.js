import { Game } from './Game'

export class Direction {
   static LEFT = new Direction('left')
   static RIGHT = new Direction('right')
   static UP = new Direction('up')
   static DOWN = new Direction('down')

   constructor(_direction) {
      this._direction = _direction
   }

   get direction() {
      return this._direction
   }

   set direction(value) {
      this._direction = value
   }

   move(player) {
      if (this === Direction.LEFT) {
         player.x -= Game.CELL_WIDTH
      }

      if (this === Direction.RIGHT) {
         player.x += Game.CELL_WIDTH
      }

      if (this === Direction.UP) {
         // todo: learn move fields refactor
         player.y -= Game.CELL_HEIGHT
      }

      if (this === Direction.DOWN) {
         player.y += Game.CELL_HEIGHT
      }

      return player
   }
}