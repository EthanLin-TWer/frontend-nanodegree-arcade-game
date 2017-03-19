export class Game {
   static CELL_WIDTH = 101
   static CELL_HEIGHT = 83
   static OBJECT_CENTER = 55

   static COLLISION_RADIUS = 12

   static HORIZON_CELLS = 5
   static VERTICAL_CELLS = 6

   static BOARD_WIDTH = Game.CELL_WIDTH * Game.HORIZON_CELLS

   static row(y) {
      return this.CELL_HEIGHT * (y - 1) + this.OBJECT_CENTER
   }
   static col(x) {
      return this.CELL_WIDTH * (x - 1)
   }
}

