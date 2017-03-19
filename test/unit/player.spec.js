import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import { Player } from '../../js/Player'
import { Game } from '../../js/constants'

describe('game player', () => {
   let player

   beforeEach('setup player', () => {
      player = new Player(Game.col(3), Game.row(3))
   })

   it('should be able to move left', () => {
      let { x, y } = player.handleInput('left')

      expect(x).to.equal(Game.col(2))
      expect(y).to.equal(Game.row(3))
   })

   it('should be able to move right', () => {
      let { x, y } = player.handleInput('right')

      expect(x).to.equal(Game.col(4))
      expect(y).to.equal(Game.row(3))
   })

   it('should be able to move up', () => {
      let { x, y } = player.handleInput('up')

      expect(x).to.equal(Game.col(3))
      expect(y).to.equal(Game.row(2))
   })

   it('should be able to move down', () => {
      let { x, y } = player.handleInput('down')

      expect(x).to.equal(Game.col(3))
      expect(y).to.equal(Game.row(4))
   })

   it('should win when reaches the top row', () => {
      player = new Player(Game.col(4), Game.row(0))
      let wins = player.wins()

      expect(wins).to.be.true
   })
})