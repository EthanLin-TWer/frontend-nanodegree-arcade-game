export class Game {
   static CELL_WIDTH = 101
   static CELL_HEIGHT = 83
   static COLLISION_RADIUS = 12
   static HORIZON_CELLS = 5
   static BOARD_WIDTH = Game.CELL_WIDTH * Game.HORIZON_CELLS

   static row(y) {
      return this.CELL_HEIGHT * (y - 1) + 55
   }
   static col(x) {
      return this.CELL_WIDTH * (x - 1)
   }
}

