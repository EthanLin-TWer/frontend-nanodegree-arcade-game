export class Game {
   static CELL_WIDTH = 101
   static col(x) {
      return Game.CELL_WIDTH * (x - 1)
   }
}