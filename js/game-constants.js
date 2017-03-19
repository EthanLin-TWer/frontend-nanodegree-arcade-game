export class Game {
   static CELL_WIDTH = 101
   static CELL_HEIGHT = 83

   static col(y) {
      return this.CELL_HEIGHT * (y - 1) + 55
   }
}

