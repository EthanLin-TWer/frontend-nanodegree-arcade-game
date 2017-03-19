import Resources from './resources'

export class Movable {
   constructor(x, y, sprite) {
      this.x = x
      this.y = y
      this.sprite = sprite
   }

   move(dx, dy) {
      this.x += dx
      this.y += dy
   }

   render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y)
   }
}
