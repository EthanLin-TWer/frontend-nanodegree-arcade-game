export class Game {
   static CELL_WIDTH = 101
   static CELL_HEIGHT = 83
   static OBJECT_CENTER = 55

   static COLLISION_RADIUS = 12

   static HORIZON_CELLS = 5
   static VERTICAL_CELLS = 6

   static BOARD_WIDTH = Game.CELL_WIDTH * Game.HORIZON_CELLS

   static TOP_BOUNDARY = Game.row(0)

   static row(y) {
      return this.CELL_HEIGHT * (y - 1) + this.OBJECT_CENTER
   }
   static col(x) {
      return this.CELL_WIDTH * (x - 1)
   }
   static withinLeftBoundary(x) {
      return x > Game.col(1)
   }
   static withinRightBoundary(x) {
      return x < Game.col(Game.HORIZON_CELLS)
   }

   static withinTopBoundary(y) {
      return y > Game.TOP_BOUNDARY
   }

   static withinBottomBoundary(y) {
      return y < Game.row(5)
   }
}

