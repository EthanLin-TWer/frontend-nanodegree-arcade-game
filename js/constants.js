var GameBoard = (function () {
	var cellWidth = 101, horizonCells  = 5;
	var cellHeight = 83, verticalCells = 6;
	var entityCenter = 58;
	var destinationCenter = entityCenter - cellHeight;
	var boardWidth = cellWidth * horizonCells;
	var boardHeight = 606; // fixed height, calculated by those 101*171 pngs
	
	return {
		cellWidth: cellWidth,
		cellHeight: cellHeight,
		boardWidth: boardWidth,
		boardHeight: boardHeight,
		entityCenter: entityCenter,
		destinationCenter: destinationCenter
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