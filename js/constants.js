var GameBoard = (function () {
	var cellWidth = 101, horizonCells  = 5;
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
		return entityCenter + cellHeight * (x - 1)
	};

	var exceedsLeftBoundary = function (x) {
		return x < 0
	};
	return {
		cellWidth: cellWidth,
		cellHeight: cellHeight,
		entityCenter: entityCenter,
		destinationCenter: destinationCenter,

		boardWidth: boardWidth,
		boardHeight: boardHeight,
		horizonCells: horizonCells,
		verticalCells: verticalCells,
		
		collisionRadius: collisionRadius,
		
		row: row,
		column: column,
		
		exceedsLeftBoundary: exceedsLeftBoundary
	}
})();

var Speed = (function () {
	return {
		'EXTREMELY_SLOW': 100,
		'VERY_SLOW': 150,
		'SLOW': 200,
		'NORMAL': 350,
		'FAST': 500,
		'VERY_FAST': 700,
		'EXTREMELY_FAST': 1000
	}
})();