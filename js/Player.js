// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
	var sprite = 'images/char-boy.png';
	var player = Movable.call(this, x, y, sprite);
	player.stars = 'images/Star.png';

	return player;
};
utils.inherits(Player, Movable);

Player.prototype.update = function (dt) { };

Player.prototype.handleInput = function (movement) {
	var cellWidth = GameBoard.cellWidth;
	var cellHeight = GameBoard.cellHeight;

	if (movement === 'left' && !GameBoard.exceedsLeftBoundary(this.x - cellWidth)) {
		this.move(-cellWidth, 0);
	}
	if (movement === 'right' && !GameBoard.exceedsRightBoundary(this.x + cellWidth)) {
		this.move(cellWidth, 0);
	} 
	if (movement === 'up' && !GameBoard.exceedsTopBoundary(this.y - cellHeight)) {
		this.move(0, -cellHeight);
	} 
	if (movement === 'down' && !GameBoard.exceedsBottomBoundary(this.y + cellHeight)) {
		this.move(0, cellHeight);
	} 
};

Player.prototype.checkWins = function () {
	if (this.y === GameBoard.destinationCenter) {
		ctx.drawImage(Resources.get(this.stars), this.x, this.y - 25);
	}
};


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
	var allowedKeys = {
		37: 'left',
		38: 'up',
		39: 'right',
		40: 'down'
	};

	player.handleInput(allowedKeys[e.keyCode]);
});
