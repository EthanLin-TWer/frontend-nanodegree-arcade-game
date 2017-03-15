var GameBoard = (function () {
   var CELL_WIDTH = 101, HORIZON_CELLS = 5;
   var CELL_HEIGHT = 83, VERTICAL_CELLS = 6;
   var ENTITY_CENTER = 58;
   var DESTINATION_CENTER = ENTITY_CENTER - CELL_HEIGHT;
   var BOARD_WIDTH = CELL_WIDTH * HORIZON_CELLS;
   var BOARD_HEIGHT = 606; // fixed height, calculated by those 101*171 pngs

   // the smaller the collision radius, the closer you can be with an enemy
   // without being judged as 'collision' and die
   var COLLISION_RADIUS = 12;

   var column = function (x) {
      return CELL_WIDTH * (x - 1);
   };

   var row = function (x) {
      return ENTITY_CENTER + CELL_HEIGHT * (x - 1);
   };

   var exceedsLeftBoundary = function (x) {
      return x < 0;
   };

   var exceedsRightBoundary = function (x) {
      return x >= BOARD_WIDTH;
   };

   var exceedsTopBoundary = function (y) {
      return y < DESTINATION_CENTER;
   };

   var exceedsBottomBoundary = function (y) {
      return y >= ENTITY_CENTER + CELL_HEIGHT * (VERTICAL_CELLS - 1);
   };

   return {
      CELL_WIDTH: CELL_WIDTH,
      CELL_HEIGHT: CELL_HEIGHT,
      ENTITY_CENTER: ENTITY_CENTER,
      DESTINATION_CENTER: DESTINATION_CENTER,

      BOARD_WIDTH: BOARD_WIDTH,
      BOARD_HEIGHT: BOARD_HEIGHT,
      HORIZON_CELLS: HORIZON_CELLS,
      VERTICAL_CELLS: VERTICAL_CELLS,

      COLLISION_RADIUS: COLLISION_RADIUS,

      row: row,
      column: column,

      exceedsLeftBoundary: exceedsLeftBoundary,
      exceedsRightBoundary: exceedsRightBoundary,
      exceedsTopBoundary: exceedsTopBoundary,
      exceedsBottomBoundary: exceedsBottomBoundary
   };
})();


var Speed = {
   EXTREMELY_SLOW: 100,
   VERY_SLOW: 150,
   SLOW: 200,
   NORMAL: 350,
   FAST: 500,
   VERY_FAST: 700,
   EXTREMELY_FAST: 1000
};
