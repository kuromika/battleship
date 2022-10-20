import Gameboard from "../src/Gameboard";

describe('Gameboard tests', () => {

    let testBoard;

    beforeEach(() => {
        testBoard = new Gameboard();
    })

    test("Ship is placed horizontally in expected coordinates", () => {
        expect(testBoard.placeShip(0, 0, 5, 'horizontal')).toBe(true);
    
    })

    test("Ship is placed vertically in expected coordinates", () => {
        expect(testBoard.placeShip(0, 1, 3, 'vertical')).toBe(true);
    })

    test("Ship can't be placed out of bounds", () => {
        expect(testBoard.placeShip(7, 7, 5, 'horizontal')).toBe(false);
    })

    test("Ship can't be placed on top of other", () => {
        testBoard.placeShip(0, 0, 5, 'horizontal');
        expect(testBoard.placeShip(0, 1, 5, 'vertical')).toBe(false);
    })

    test("Attack is registered correctly and ship is hit", () => {
        testBoard.placeShip(6, 6, 3, 'horizontal');
        expect(testBoard.receiveAttack(6, 6)).toBe(true);
        expect(testBoard.getValueAt(6, 6)).toBe(7);
    })

    test('Attack is registred correctly but hits nothing', () => {
        expect(testBoard.receiveAttack(3, 3)).toBe(false);
        expect(testBoard.getValueAt(3, 3)).toBe(6);
    })

})
    