import Resources from './resources'

// Enemies our player must avoid
export class Enemy {
   constructor(x, y) {
      this.x = x
      this.y = y
      this.sprite = 'images/enemy-bug.png'
   }

   update(dt) {

   }

   render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
   }
}

export const allEnemies = [new Enemy(1, 2)]
