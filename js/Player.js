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

Player.prototype.update = function (dt) {
	this.checkWins()
};

Player.prototype.handleInput = function (movement) {
	var entityCenter = GameBoard.entityCenter;
	var cellWidth = GameBoard.cellWidth;
	var cellHeight = GameBoard.cellHeight;

	if (movement === 'left' && this.x >= cellWidth) this.x -= cellWidth;
	if (movement === 'right' && this.x < cellWidth * 4) this.x += cellWidth;
	if (movement === 'up' && this.y >= entityCenter) this.y -= cellHeight;
	if (movement === 'down' && this.y < entityCenter + cellHeight * 3) this.y += cellHeight;

	console.log('player moved, current position: ' + this.x + ', ' + this.y)
};

Player.prototype.checkWins = function () {
	if (this.y === GameBoard.destinationCenter) {
		ctx.drawImage(Resources.get(this.stars), this.x, this.y + 50);
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
