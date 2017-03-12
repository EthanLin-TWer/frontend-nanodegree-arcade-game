var GameBoard = (function () {
	var cellWidth = 101;
	var cellHeight = 83;
	var entityCenter = 58;
	var destinationCenter = entityCenter - cellHeight;
	return {
		cellWidth: cellWidth,
		cellHeight: cellHeight,
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