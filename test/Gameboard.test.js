import Gameboard from "../src/Gameboard";

describe('Gameboard tests', () => {

    let testBoard;

    beforeEach(() => {
        testBoard = Gameboard();
    })

    test("Ship is placed horizontally in expected coordinates", () => {
        testBoard.placeShip(0, 0, 5, 'horizontal');
        let flag = true;
        for (let j = 0; j < 5; j++){
            if (testBoard.getValueAt(j,0) !== 1) {
                flag = false;
                break;
            }
        }
        expect(flag).toBe(true);
    })

    test("Ship is placed vertically in expected coordinates", () => {
        testBoard.placeShip(1, 0, 3, 'vertical');
        let flag = true;
        for (let i = 0; i < 3; i++){
            if (testBoard.getValueAt(1,i) !== 1) {
                flag = false;
                break;
            }
        }
        expect(flag).toBe(true);
    })

    test("Ship can't be placed out of bounds", () => {
        testBoard.placeShip(7, 7, 5, 'horizontal');
        expect(testBoard.getValueAt(7, 7)).toBe(0);
    })

    test("Ship can't be placed on top of other", () => {
        testBoard.placeShip(0, 0, 5, 'horizontal');
        testBoard.placeShip(1, 0, 5, 'vertical');
        expect(testBoard.getValueAt(1, 1)).toBe(0);
    })

    test("Attack is registered correctly and ship is hit", () => {
        testBoard.placeShip(6, 6, 3, horizontal);
        testBoard.receiveAttack(6, 6);
        expect(testBoard.getValueAt(6, 6)).toBe(2);
    })

    test('Attack is registred correctly but hits nothing', () => {
        testBoard.receiveAttack(3, 3);
        expect(testBoard.getValueAt(3, 3)).toBe(3);
    })

})
    