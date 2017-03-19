import { describe, it } from 'mocha'
import { expect } from 'chai'
import { Player } from '../../js/Player'
import { Game } from '../../js/game-constants'

describe('game player', () => {
   it('should be able to move left', () => {
      let player = new Player(202, 30)
      player.handleInput('left')

      expect(player.x).to.equal(202 - Game.CELL_WIDTH)
      expect(player.y).to.equal(30)
   })

   it('should be able to move right', () => {
      let player = new Player(202, 30)
      player.handleInput('right')

      expect(player.x).to.equal(202 + Game.CELL_WIDTH)
      expect(player.y).to.equal(30)
   })
})