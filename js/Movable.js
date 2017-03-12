var Movable = function (x, y, sprite) {
	this.x = x;
	this.y = y;
	this.sprite = sprite;

	return this;
};

Movable.prototype.move = function () { };

// Draw an movable object on the screen, required method for game
Movable.prototype.render = function () {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
