import { Player } from '../js/Player'
import { expect } from 'chai'

describe('player', () => {
   describe('move functionalities', () => {
      it('should be able to move left', () => {
         const player = new Player(101, 0)
         const position = player.handleInput('left')

         expect(position.x).to.equal(0)
      })
   })
})