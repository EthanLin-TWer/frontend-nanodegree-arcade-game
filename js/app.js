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
