var declareInheritance = function(subClass, superClass) {
	var indirectionFunction = function () {}
	indirectionFunction.prototype = superClass.prototype

	subClass.prototype = new indirectionFunction();
	subClass.prototype.constructor = subClass;
};


var Movable = function (x, y, sprite) {
	this.x = x;
	this.y = y;
	this.sprite = sprite;

	return this;
};

Movable.prototype.move = function () {

};

// Draw the movable object on the screen, required method for game
Movable.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Enemies our player must avoid
var Enemy = function (x, y, speed) {
	// Variables applied to each of our instances go here,
	// we've provided one for you to get started
	var sprite = 'images/enemy-bug.png';
	var enemy = Movable.call(this, x, y, sprite);
	enemy.speed = speed;

	// The image/sprite for our enemies, this uses
	// a helper we've provided to easily load images
	return enemy;
};
declareInheritance(Enemy, Movable);


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
	this.x = this.x + dt * this.speed;
	if (this.x > 505) {
		this.x -= 505;
	}
	// You should multiply any movement by the dt parameter
	// which will ensure the game runs at the same speed for
	// all computers.
};

Enemy.prototype.checkCollision = function (object) {
	if (object.y !== this.y) return false;
	return Math.abs(object.x - this.x) <= GameBoard.collisionRadius;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
	var sprite = 'images/char-boy.png';
	var player = Movable.call(this, x, y, sprite);
	player.stars = 'images/Star.png';

	return player;
};
declareInheritance(Player, Movable);

Player.prototype.update = function (dt) {

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
		console.log(this.stars);
		ctx.drawImage(Resources.get(this.stars), this.x, this.y + 50);
	}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
	new Enemy(20, GameBoard.row(1), Speed.EXTREMELY_SLOW),
	new Enemy(200, GameBoard.row(1), Speed.SLOW),
	new Enemy(303, GameBoard.row(2), Speed.EXTREMELY_SLOW),
	new Enemy(20, GameBoard.row(2), Speed.EXTREMELY_FAST),
	new Enemy(200, GameBoard.row(3), Speed.NORMAL),
	new Enemy(2, GameBoard.row(3), Speed.EXTREMELY_SLOW)
];
var player = new Player(GameBoard.column(3), GameBoard.row(4));

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
