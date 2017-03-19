import { describe, it, beforeEach } from 'mocha'
import { expect } from 'chai'
import Sinon from 'sinon'
import { Player } from '../../js/Player'
import { Game } from '../../js/constants'

describe('player', () => {
   let player

   beforeEach('setup player', () => {
      player = new Player(Game.col(3), Game.row(3))
   })

   describe('movement functionalities', () => {
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
   })

   describe('game winning', () => {
      it('should win when reaches the top row', () => {
         player = new Player(Game.col(4), Game.row(0))
         let wins = player.wins()

         expect(wins).to.be.true
      })

      it('should game continue when player not reached the top row', () => {
         player = new Player(Game.col(4), Game.row(1))
         let wins = player.wins()

         expect(wins).to.be.false
      })

      it('should game continue when player not reached the top row', () => {
         player = new Player(Game.col(4), Game.row(-1))
         let wins = player.wins()

         expect(wins).to.be.false
      })

      it('should reset player to initial position after player wins', () => {
         let wins = Sinon.stub(player, 'wins')
         wins.returns(true)

         player.update()

         expect(player.x).to.equal(Game.col(3))
         expect(player.y).to.equal(Game.row(5))
      })


      it('should not be reset if player still on the game', () => {
         player = new Player(Game.col(1), Game.row(4))
         let wins = Sinon.stub(player, 'wins')
         wins.returns(false)

         player.update()

         expect(player.x).to.equal(Game.col(1))
         expect(player.y).to.equal(Game.row(4))
      })
   })

   describe('error handling', () => {
      it('should not move out of left boundary', () => {
         player = new Player(Game.col(1), Game.row(3))

         let afterMovement = player.handleInput('left')

         expect(afterMovement.x).to.equal(Game.col(1))
         expect(afterMovement.y).to.equal(Game.row(3))
      })

      it('should not move out of right boundary', () => {
         player = new Player(Game.col(5), Game.row(3))

         let afterMovement = player.handleInput('right')

         expect(afterMovement.x).to.equal(Game.col(5))
         expect(afterMovement.y).to.equal(Game.row(3))
      })

      it('should not move out of bottom boundary', () => {
         player = new Player(Game.col(3), Game.row(5))

         let afterMovement = player.handleInput('down')

         expect(afterMovement.x).to.equal(Game.col(3))
         expect(afterMovement.y).to.equal(Game.row(5))
      })
   })
})