import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { Enemy } from '../../js/Enemy'
import { Game } from '../../js/game-constants'
import { Speed } from '../../js/speed'

describe('game enemy', () => {
   it('should be able to move', () => {
      let enemy = new Enemy(1, 2, Speed.NORMAL)
      enemy.update(1/1000)

      expect(enemy.x).to.not.equal(1)
   })

   it('should be able to move very fast', () => {
      let enemy = new Enemy(1, 2, 500)
      enemy.update(1/1000)

      expect(enemy.speed).to.equal(500)
      expect(enemy.x).to.equal(1 + 1 / 1000 * 500)
   })
})