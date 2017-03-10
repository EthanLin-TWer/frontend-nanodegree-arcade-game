// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var enemy = Object.create(Enemy.prototype);
    enemy.x = x;
    enemy.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    enemy.sprite = 'images/enemy-bug.png';
    return enemy;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    this.x = this.x + dt;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    var player = Object.create(Player.prototype);
    player.x = x;
    player.y = y;
    player.sprite = 'images/char-boy.png';

    return player;
};

Player.prototype.update = function (dt) {
};

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function () {

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [Enemy(20, 30), Enemy(200, 30)];
var player = Player(202, 303);

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
