export class Direction {
   static LEFT = new Direction('left')
   static RIGHT = new Direction('right')
   static UP = new Direction('up')
   static DOWN = new Direction('down')

   constructor(_direction) {
      this._direction = _direction
   }

   get direction() {
      return this._direction
   }

   set direction(value) {
      this._direction = value
   }
}