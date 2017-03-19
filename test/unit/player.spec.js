import { describe, it } from 'mocha'
import { expect } from 'chai'
import { Player } from '../../js/Player'

describe('game player', () => {
   it('player should be able to move left', () => {
      let player = new Player(202, 30)
      player.handleInput('left')

      expect(player.x).to.equal(202 - 101)
      expect(player.y).to.equal(30)
   })
})