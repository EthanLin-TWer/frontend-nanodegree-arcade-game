import { Player } from '../js/Player'
import { Game } from '../js/Game'
import { expect } from 'chai'

describe('player', () => {
   describe('move functionalities', () => {
      it('x should be 0 when move left given current x is 101', () => {
         const player = new Player(Game.col(2), 0)
         const position = player.handleInput('left')

         expect(position.x).to.equal(101 - Game.CELL_WIDTH)
      })

      it('x should be 101 when move left given current x is 202', () => {
         const player = new Player(Game.col(3), 0)
         const position = player.handleInput('left')

         expect(position.x).to.equal(202 - Game.CELL_WIDTH)
      })
   })
})