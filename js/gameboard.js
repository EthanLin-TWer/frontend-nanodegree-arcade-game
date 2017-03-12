var GameBoard = (function (global) {
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