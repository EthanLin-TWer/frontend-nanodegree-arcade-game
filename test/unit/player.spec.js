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
      player.handleInput('left')

      expect(player.x).to.equal(202 - Game.CELL_WIDTH)
      expect(player.y).to.equal(30)
   })

   it('should be able to move right', () => {
      player.handleInput('right')

      expect(player.x).to.equal(202 + Game.CELL_WIDTH)
      expect(player.y).to.equal(30)
   })
})