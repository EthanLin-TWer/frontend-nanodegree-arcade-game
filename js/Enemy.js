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
utils.inherits(Enemy, Movable);

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
