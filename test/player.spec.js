import { Player } from '../js/Player'
import { expect } from 'chai'

describe('player', () => {
   describe('move functionalities', () => {
      it('x should be 0 when move left given current x is 101', () => {
         const player = new Player(101, 0)
         const position = player.handleInput('left')

         expect(position.x).to.equal(0)
      })

      it('x should be 101 when move left given current x is 202', () => {
         const player = new Player(202, 0)
         const position = player.handleInput('left')

         expect(position.x).to.equal(101)
      })
   })
})