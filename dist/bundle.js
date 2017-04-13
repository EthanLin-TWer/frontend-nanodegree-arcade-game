(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.allEnemies = exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Movable2 = require('./Movable');

var _constants = require('./constants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = exports.Enemy = function (_Movable) {
   _inherits(Enemy, _Movable);

   function Enemy(x, y, speed) {
      _classCallCheck(this, Enemy);

      var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, x, y, 'images/enemy-bug.png'));

      _this.speed = speed;
      return _this;
   }

   _createClass(Enemy, [{
      key: 'update',
      value: function update(dt) {
         this.move(dt * this.speed, 0);

         if (this.x > _constants.Game.BOARD_WIDTH) {
            this.move(-_constants.Game.BOARD_WIDTH, 0);
         }
      }
   }, {
      key: 'checkCollision',
      value: function checkCollision(player) {
         if (player.y !== this.y) return false;

         return Math.abs(player.x - this.x) <= _constants.Game.COLLISION_RADIUS;
      }
   }]);

   return Enemy;
}(_Movable2.Movable);

var allEnemies = exports.allEnemies = [new Enemy(_constants.Game.col(2), _constants.Game.row(1), _constants.Speed.EXTREMELY_FAST), new Enemy(_constants.Game.col(3), _constants.Game.row(2), _constants.Speed.FAST), new Enemy(_constants.Game.col(1), _constants.Game.row(2), _constants.Speed.VERY_FAST), new Enemy(_constants.Game.col(2), _constants.Game.row(3), _constants.Speed.SLOW), new Enemy(_constants.Game.col(3), _constants.Game.row(3), _constants.Speed.EXTREMELY_SLOW), new Enemy(_constants.Game.col(1), _constants.Game.row(3), _constants.Speed.NORMAL)];

},{"./Movable":2,"./constants":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Movable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movable = exports.Movable = function () {
   function Movable(x, y, sprite) {
      _classCallCheck(this, Movable);

      this.x = x;
      this.y = y;
      this.sprite = sprite;
   }

   _createClass(Movable, [{
      key: 'move',
      value: function move(dx, dy) {
         this.x += dx;
         this.y += dy;
      }
   }, {
      key: 'render',
      value: function render() {
         ctx.drawImage(_resources2.default.get(this.sprite), this.x, this.y);
      }
   }]);

   return Movable;
}();

},{"./resources":8}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Player = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('./constants');

var _Movable2 = require('./Movable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = exports.Player = function (_Movable) {
   _inherits(Player, _Movable);

   function Player(x, y) {
      _classCallCheck(this, Player);

      return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, 'images/char-boy.png'));
   }

   _createClass(Player, [{
      key: 'update',
      value: function update() {
         if (this.wins()) {
            var _Player$initialPositi = Player.initialPosition(),
                x = _Player$initialPositi.x,
                y = _Player$initialPositi.y;

            this.x = x;
            this.y = y;
         }
      }
   }, {
      key: 'wins',
      value: function wins() {
         return this.y === _constants.Game.TOP_BOUNDARY;
      }
   }, {
      key: 'handleInput',
      value: function handleInput(movement) {
         switch (movement) {
            case 'left':
               if (_constants.Game.withinLeftBoundary(this.x)) {
                  this.move(-_constants.Game.CELL_WIDTH, 0);
               }
               break;
            case 'right':
               if (_constants.Game.withinRightBoundary(this.x)) {
                  this.move(_constants.Game.CELL_WIDTH, 0);
               }
               break;
            case 'up':
               if (_constants.Game.withinTopBoundary(this.y)) {
                  this.move(0, -_constants.Game.CELL_HEIGHT);
               }
               break;
            case 'down':
               if (_constants.Game.withinBottomBoundary(this.y)) {
                  this.move(0, _constants.Game.CELL_HEIGHT);
               }
               break;
         }

         return this;
      }
   }], [{
      key: 'initialPosition',
      value: function initialPosition() {
         return new Player(_constants.Game.col(3), _constants.Game.row(5));
      }
   }]);

   return Player;
}(_Movable2.Movable);

},{"./Movable":2,"./constants":5}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = exports.Game = function () {
   function Game() {
      _classCallCheck(this, Game);
   }

   _createClass(Game, null, [{
      key: "row",
      value: function row(y) {
         return this.CELL_HEIGHT * (y - 1) + this.OBJECT_CENTER;
      }
   }, {
      key: "col",
      value: function col(x) {
         return this.CELL_WIDTH * (x - 1);
      }
   }, {
      key: "withinLeftBoundary",
      value: function withinLeftBoundary(x) {
         return x > Game.col(1);
      }
   }, {
      key: "withinRightBoundary",
      value: function withinRightBoundary(x) {
         return x < Game.col(Game.HORIZON_CELLS);
      }
   }, {
      key: "withinTopBoundary",
      value: function withinTopBoundary(y) {
         return y > Game.TOP_BOUNDARY;
      }
   }, {
      key: "withinBottomBoundary",
      value: function withinBottomBoundary(y) {
         return y < Game.row(Game.VERTICAL_CELLS - 1);
      }
   }]);

   return Game;
}();

Game.CELL_WIDTH = 101;
Game.CELL_HEIGHT = 83;
Game.OBJECT_CENTER = 55;
Game.COLLISION_RADIUS = 12;
Game.HORIZON_CELLS = 5;
Game.VERTICAL_CELLS = 6;
Game.BOARD_WIDTH = Game.CELL_WIDTH * Game.HORIZON_CELLS;
Game.TOP_BOUNDARY = Game.row(0);

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _game = require('./game');

Object.defineProperty(exports, 'Game', {
  enumerable: true,
  get: function get() {
    return _game.Game;
  }
});

var _speed = require('./speed');

Object.defineProperty(exports, 'Speed', {
  enumerable: true,
  get: function get() {
    return _speed.Speed;
  }
});

},{"./game":4,"./speed":6}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
var Speed = exports.Speed = {
   'EXTREMELY_SLOW': 50,
   'VERY_SLOW': 150,
   'SLOW': 250,
   'NORMAL': 400,
   'FAST': 500,
   'VERY_FAST': 700,
   'EXTREMELY_FAST': 1000
};

},{}],7:[function(require,module,exports){
'use strict';

var _resources = require('./resources');

var _resources2 = _interopRequireDefault(_resources);

var _constants = require('./constants');

var _Enemy = require('./Enemy');

var _Player = require('./Player');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine is available globally via the Engine variable and it also makes
 * the canvas' context (ctx) object globally available to make writing app.js
 * a little simpler to work with.
 */

var Engine = function () {
   /* Predefine the variables we'll be using within this scope,
    * create the canvas element, grab the 2D context for that canvas
    * set the canvas elements height/width and add it to the DOM.
    */
   var doc = window.document,
       win = window,
       canvas = doc.createElement('canvas'),
       ctx = canvas.getContext('2d');
   var lastTime = void 0;
   var player = void 0;

   canvas.width = _constants.Game.BOARD_WIDTH;
   canvas.height = 606;
   doc.body.appendChild(canvas);

   /* This function serves as the kickoff point for the game loop itself
    * and handles properly calling the update and render methods.
    */
   function main() {
      /* Get our time delta information which is required if your game
       * requires smooth animation. Because everyone's computer processes
       * instructions at different speeds we need a constant value that
       * would be the same for everyone (regardless of how fast their
       * computer is) - hurray time!
       */
      var now = Date.now(),
          dt = (now - lastTime) / 1000.0;

      /* Call our update/render functions, pass along the time delta to
       * our update function since it may be used for smooth animation.
       */
      update(dt);
      render();

      /* Set our lastTime variable which is used to determine the time delta
       * for the next time this function is called.
       */
      lastTime = now;

      /* Use the browser's requestAnimationFrame function to call this
       * function again as soon as the browser is able to draw another frame.
       */
      win.requestAnimationFrame(main);
   }

   /* This function does some initial setup that should only occur once,
    * particularly setting the lastTime variable that is required for the
    * game loop.
    */
   function init() {
      reset();
      lastTime = Date.now();
      main();
   }

   /* This function is called by main (our game loop) and itself calls all
    * of the functions which may need to update entity's data. Based on how
    * you implement your collision detection (when two entities occupy the
    * same space, for instance when your character should die), you may find
    * the need to add an additional function call here. For now, we've left
    * it commented out - you may or may not want to implement this
    * functionality this way (you could just implement collision detection
    * on the entities themselves within your app.js file).
    */
   function update(dt) {
      updateEntities(dt);
      checkCollisions();
   }

   function checkCollisions() {
      var collides = _Enemy.allEnemies.some(function (enemy) {
         return enemy.checkCollision(player);
      });
      if (collides) {
         player = _Player.Player.initialPosition();
      }
   }

   /* This is called by the update function and loops through all of the
    * objects within your allEnemies array as defined in app.js and calls
    * their update() methods. It will then call the update function for your
    * player object. These update methods should focus purely on updating
    * the data/properties related to the object. Do your drawing in your
    * render methods.
    */
   function updateEntities(dt) {
      _Enemy.allEnemies.forEach(function (enemy) {
         enemy.update(dt);
      });
      player.update();
   }

   /* This function initially draws the "game level", it will then call
    * the renderEntities function. Remember, this function is called every
    * game tick (or loop of the game engine) because that's how games work -
    * they are flipbooks creating the illusion of animation but in reality
    * they are just drawing the entire screen over and over.
    */
   function render() {
      /* This array holds the relative URL to the image used
       * for that particular row of the game level.
       */
      var rowImages = ['images/water-block.png', // Top row is water
      'images/stone-block.png', // Row 1 of 3 of stone
      'images/stone-block.png', // Row 2 of 3 of stone
      'images/stone-block.png', // Row 3 of 3 of stone
      'images/grass-block.png', // Row 1 of 2 of grass
      'images/grass-block.png' // Row 2 of 2 of grass
      ],
          numRows = _constants.Game.VERTICAL_CELLS,
          numCols = _constants.Game.HORIZON_CELLS;

      /* Loop through the number of rows and columns we've defined above
       * and, using the rowImages array, draw the correct image for that
       * portion of the "grid"
       */
      for (var row = 0; row < numRows; row++) {
         for (var col = 0; col < numCols; col++) {
            /* The drawImage function of the canvas' context element
             * requires 3 parameters: the image to draw, the x coordinate
             * to start drawing and the y coordinate to start drawing.
             * We're using our Resources helpers to refer to our images
             * so that we get the benefits of caching these images, since
             * we're using them over and over.
             */
            ctx.drawImage(_resources2.default.get(rowImages[row]), col * _constants.Game.CELL_WIDTH, row * _constants.Game.CELL_HEIGHT);
         }
      }

      renderEntities();
   }

   /* This function is called by the render function and is called on each game
    * tick. Its purpose is to then call the render functions you have defined
    * on your enemy and player entities within app.js
    */
   function renderEntities() {
      /* Loop through all of the objects within the allEnemies array and call
       * the render function you have defined.
       */
      _Enemy.allEnemies.forEach(function (enemy) {
         enemy.render();
      });

      player.render();
   }

   /* This function does nothing but it could have been a good place to
    * handle game reset states - maybe a new game menu or a game over screen
    * those sorts of things. It's only called once by the init() method.
    */
   function reset() {
      player = _Player.Player.initialPosition();
   }

   /* Go ahead and load all of the images we know we're going to need to
    * draw our game level. Then set init as the callback method, so that when
    * all of these images are properly loaded our game will start.
    */
   _resources2.default.load(['images/stone-block.png', 'images/water-block.png', 'images/grass-block.png', 'images/enemy-bug.png', 'images/char-boy.png']);
   _resources2.default.onReady(init);

   /* Assign the canvas' context object to the global variable (the window
    * object when run in a browser) so that developers can use it more easily
    * from within their app.js files.
    */
   window.ctx = ctx;

   // This listens for key presses and sends the keys to your
   // Player.handleInput() method. You don't need to modify this.
   document.addEventListener('keyup', function (e) {
      var allowedKeys = {
         '37': 'left',
         '38': 'up',
         '39': 'right',
         '40': 'down'
      };

      player.handleInput(allowedKeys[e.keyCode]);
   });
}();

},{"./Enemy":1,"./Player":3,"./constants":5,"./resources":8}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
/* Resources.js
 * This is simply an image loading utility. It eases the process of loading
 * image files so that they can be used within your game. It also includes
 * a simple "caching" layer so it will reuse cached images if you attempt
 * to load the same image multiple times.
 */
var resourceCache = {};
var loading = [];
var readyCallbacks = [];

/* This is the publicly accessible image loading function. It accepts
 * an array of strings pointing to image files or a string for a single
 * image. It will then call our private image loading function accordingly.
 */
function load(urlOrArr) {
   if (urlOrArr instanceof Array) {
      /* If the developer passed in an array of images
       * loop through each value and call our image
       * loader on that image file
       */
      urlOrArr.forEach(function (url) {
         _load(url);
      });
   } else {
      /* The developer did not pass an array to this function,
       * assume the value is a string and call our image loader
       * directly.
       */
      _load(urlOrArr);
   }
}

/* This is our private image loader function, it is
 * called by the public image loader function.
 */
function _load(url) {
   if (resourceCache[url]) {
      /* If this URL has been previously loaded it will exist within
       * our resourceCache array. Just return that image rather
       * re-loading the image.
       */
      return resourceCache[url];
   } else {
      /* This URL has not been previously loaded and is not present
       * within our cache; we'll need to load this image.
       */
      var img = new Image();
      img.onload = function () {
         /* Once our image has properly loaded, add it to our cache
          * so that we can simply return this image if the developer
          * attempts to load this file in the future.
          */
         resourceCache[url] = img;

         /* Once the image is actually loaded and properly cached,
          * call all of the onReady() callbacks we have defined.
          */
         if (isReady()) {
            readyCallbacks.forEach(function (func) {
               func();
            });
         }
      };

      /* Set the initial cache value to false, this will change when
       * the image's onload event handler is called. Finally, point
       * the image's src attribute to the passed in URL.
       */
      resourceCache[url] = false;
      img.src = url;
   }
}

/* This is used by developers to grab references to images they know
 * have been previously loaded. If an image is cached, this functions
 * the same as calling load() on that URL.
 */
function get(url) {
   return resourceCache[url];
}

/* This function determines if all of the images that have been requested
 * for loading have in fact been properly loaded.
 */
function isReady() {
   var ready = true;
   for (var k in resourceCache) {
      if (resourceCache.hasOwnProperty(k) && !resourceCache[k]) {
         ready = false;
      }
   }
   return ready;
}

/* This function will add a function to the callback stack that is called
 * when all requested images are properly loaded.
 */
function onReady(func) {
   readyCallbacks.push(func);
}

/* This object defines the publicly accessible functions available to
 * developers by creating a global Resources object.
 */
var Resources = {
   load: load, get: get, onReady: onReady, isReady: isReady
};

exports.default = Resources;

},{}]},{},[1,2,3,7,8]);
