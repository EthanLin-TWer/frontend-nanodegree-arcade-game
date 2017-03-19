import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { Enemy } from '../../js/Enemy'
import { Game } from '../../js/game-constants'
import { Speed } from '../../js/speed'

describe('game enemy', () => {
   it('should be able to move', () => {
      let enemy = new Enemy(Game.col(1), Game.row(2), Speed.NORMAL)
      enemy.update(1)

      expect(enemy.x).to.not.equal(Game.col(1))
   })

   it('should be able to move very fast', () => {
      let enemy = new Enemy(Game.col(1), Game.row(2), Speed.VERY_FAST)
      enemy.update(1)

      expect(enemy.speed).to.equal(Speed.VERY_FAST)
   })
})