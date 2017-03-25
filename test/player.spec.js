import { Player } from '../js/Player'
import { Game } from '../js/Game'
import { expect } from 'chai'

describe('player', () => {
   describe('move functionalities', () => {

      it('should be in col 1 when move left given player is in col 2', () => {
         const player = new Player(Game.col(3), 0)
         const position = player.handleInput('left')

         expect(position.x).to.equal(Game.col(2))
      })

      it('should be in col 3 when move right given player is in col 2', () => {
         const player = new Player(Game.col(2), 0)
         const position = player.handleInput('right')

         expect(position.x).to.equal(Game.col(3))
      })

   })

})