export class Game {
   static CELL_WIDTH = 101
   static CELL_HEIGHT = 83
   static COLLISION_RADIUS = 12

   static row(y) {
      return this.CELL_HEIGHT * (y - 1) + 55
   }
   static col(x) {
      return this.CELL_WIDTH * (x - 1)
   }
}

