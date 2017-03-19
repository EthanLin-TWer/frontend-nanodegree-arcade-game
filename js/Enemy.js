import Resources from './resources'
import { Game } from './constants'

export class Enemy {
   constructor(x, y, speed) {
      this.x = x
      this.y = y
      this.speed = speed
      this.sprite = 'images/enemy-bug.png'
   }

   update(dt) {
      this.x += dt * this.speed
   }

   render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
   }

   checkCollision(player) {
      if (player.y !== this.y) return false

      return Math.abs(player.x - this.x) <= Game.COLLISION_RADIUS
   }
}

export const allEnemies = [
   // new Enemy(Game.col(2), Game.row(1), Speed.FAST)
]
