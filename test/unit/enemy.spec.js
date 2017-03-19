import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { Enemy } from '../../js/Enemy'
import { Game } from '../../js/game-constants'

describe('game enemy', () => {
   it('should be able to move', () => {
      let enemy = new Enemy(1, 2, 300)
      enemy.update(1/1000)

      expect(enemy.x).to.not.equal(1)
   })
})