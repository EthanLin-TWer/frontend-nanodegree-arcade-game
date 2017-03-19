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
}

export const allEnemies = [new Enemy(1, 2, 300)]
