import { Movable } from './Movable'
import { Game, Speed } from './constants'

export class Enemy extends Movable {
   constructor(x, y, speed) {
      super(x, y, 'images/enemy-bug.png')
      this.speed = speed
   }

   update(dt) {
      this.x += dt * this.speed
      if (this.x > Game.BOARD_WIDTH) {
         this.x -= Game.BOARD_WIDTH
      }
   }

   checkCollision(player) {
      if (player.y !== this.y) return false

      return Math.abs(player.x - this.x) <= Game.COLLISION_RADIUS
   }
}

export const allEnemies = [
   new Enemy(Game.col(2), Game.row(1), Speed.EXTREMELY_FAST),
   new Enemy(Game.col(3), Game.row(2), Speed.FAST),
   new Enemy(Game.col(1), Game.row(2), Speed.VERY_FAST),
   new Enemy(Game.col(2), Game.row(3), Speed.SLOW),
   new Enemy(Game.col(3), Game.row(3), Speed.EXTREMELY_SLOW),
   new Enemy(Game.col(1), Game.row(3), Speed.NORMAL),
]
