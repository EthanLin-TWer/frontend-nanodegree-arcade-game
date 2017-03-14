// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var randomPositionInRow = function () {
   var boardWidth = GameBoard.boardWidth;
   return Math.floor(Math.random() * boardWidth)
};

var player = new Player(GameBoard.column(3), GameBoard.row(4));
var allEnemies = [
   new Enemy(randomPositionInRow(), GameBoard.row(1), Speed.FAST),
   new Enemy(randomPositionInRow(), GameBoard.row(1), Speed.VERY_FAST),
   new Enemy(randomPositionInRow(), GameBoard.row(1), Speed.SLOW),
   new Enemy(randomPositionInRow(), GameBoard.row(2), Speed.EXTREMELY_SLOW),
   new Enemy(randomPositionInRow(), GameBoard.row(2), Speed.EXTREMELY_FAST),
   new Enemy(randomPositionInRow(), GameBoard.row(3), Speed.NORMAL),
   new Enemy(randomPositionInRow(), GameBoard.row(3), Speed.EXTREMELY_SLOW)
];
