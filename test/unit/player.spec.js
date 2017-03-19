import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { Player } from '../../js/Player'
import { Game } from '../../js/game-constants'

describe('game player', () => {
   let player

   beforeEach('setup player', () => {
      player = new Player(202, 30)
   })

   it('should be able to move left', () => {
      let { x, y } = player.handleInput('left');

      expect(x).to.equal(202 - Game.CELL_WIDTH)
      expect(y).to.equal(30)
   })

   it('should be able to move right', () => {
      let { x, y } = player.handleInput('right');

      expect(x).to.equal(202 + Game.CELL_WIDTH)
      expect(y).to.equal(30)
   })

   it('should be able to move forward', () => {
      let player = new Player(202, 83 * 2 + 55)
      let { x, y } = player.handleInput('up')

      expect(x).to.equal(202)
      expect(y).to.equal(83 * 1 + 55)
   })
})