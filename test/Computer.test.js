import Computer from "../src/Computer";
import Player from "../src/Player";

let ai;

beforeAll(() => {
    ai = new Computer();
})

it('Can access computer Gameboard', () => {
    expect(ai.board).toBeDefined();
});

it('Can switch turns with Player', () => {
    ai.next = new Player();
    expect(ai.next).toBeDefined();
})

it('Gives a random move to play', () => {
    expect(ai.getNextMove()).toBeInstanceOf(Array);
})