import Player from '../src/Player'

describe('Player tests', () => {

    it('Correctly switchs turns between Players', () => {
        const playerOne = new Player();
        const playerTwo = new Player();

        playerOne.next = playerTwo;
        playerTwo.next = playerOne;

        expect(playerOne.next).toBe(playerTwo);
        expect(playerTwo.next).toBe(playerOne);
    })
})