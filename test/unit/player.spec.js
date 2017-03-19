import { expect } from 'chai'
import { Player } from '../../js/Player'

describe('game player', () => {
   it('player should be able to move left', () => {
      let player = new Player(202, 83 * 3 + 55);
      player.handleInput('left');

      expect(player.x).to.equal(202)
      expect(player.y).to.equal(83 * 3 + 55)
   })
})