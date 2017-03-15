var GameBoard = (function () {
   var cellWidth = 101, horizonCells = 5;
   var cellHeight = 83, verticalCells = 6;
   var entityCenter = 58;
   var destinationCenter = entityCenter - cellHeight;
   var boardWidth = cellWidth * horizonCells;
   var boardHeight = 606; // fixed height, calculated by those 101*171 pngs

   // the smaller the collision radius, the closer you can be with an enemy
   // without being judged as 'collision' and die
   var collisionRadius = 12;

   var column = function (x) {
      return cellWidth * (x - 1);
   };

   var row = function (x) {
      return entityCenter + cellHeight * (x - 1);
   };

   var exceedsLeftBoundary = function (x) {
      return x < 0;
   };

   var exceedsRightBoundary = function (x) {
      return x >= boardWidth;
   };

   var exceedsTopBoundary = function (y) {
      return y < destinationCenter;
   };

   var exceedsBottomBoundary = function (y) {
      return y >= entityCenter + cellHeight * (verticalCells - 1);
   };

   return {
      CELL_WIDTH: cellWidth,
      CELL_HEIGHT: cellHeight,
      ENTITY_CENTER: entityCenter,
      DESTINATION_CENTER: destinationCenter,

      BOARD_WIDTH: boardWidth,
      BOARD_HEIGHT: boardHeight,
      HORIZON_CELLS: horizonCells,
      VERTICAL_CELLS: verticalCells,

      COLLISION_RADIUS: collisionRadius,

      row: row,
      column: column,

      exceedsLeftBoundary: exceedsLeftBoundary,
      exceedsRightBoundary: exceedsRightBoundary,
      exceedsTopBoundary: exceedsTopBoundary,
      exceedsBottomBoundary: exceedsBottomBoundary
   }
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
