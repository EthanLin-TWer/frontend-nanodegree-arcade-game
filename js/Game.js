export class Game {
   static CELL_WIDTH = 101
   static CELL_HEIGHT = 83

   static col(x) {
      return Game.CELL_WIDTH * (x - 1)
   }
}