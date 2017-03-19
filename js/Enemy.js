import Resources from './resources'

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
      return false
   }
}

export const allEnemies = [
   // new Enemy(Game.col(2), Game.row(1), Speed.FAST)
]
