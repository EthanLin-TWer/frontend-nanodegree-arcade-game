import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { Enemy } from '../../js/Enemy'
import { Game, Speed } from '../../js/constants'
import { Player } from '../../js/Player'

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

   it('should be able to move very slow', () => {
      let enemy = new Enemy(Game.col(1), Game.row(2), Speed.VERY_SLOW)
      enemy.update(1)

      expect(enemy.speed).to.equal(Speed.VERY_SLOW)
   })

   it('should not collide when player is not in the same row', () => {
      let enemy = new Enemy(Game.col(1), Game.row(2), Speed.FAST)
      let player = new Player(Game.col(1), Game.row(3))

      let collides = enemy.checkCollision(player)
      expect(collides).to.be.false
   })
})