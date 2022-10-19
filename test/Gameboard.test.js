import Gameboard from "../src/Gameboard";

describe('Gameboard tests', () => {

    let testBoard;

    beforeEach(() => {
        testBoard = new Gameboard();
    })

    test("Ship is placed horizontally in expected coordinates", () => {
        testBoard.placeShip(0, 0, 5, 'horizontal');
        let flag = true;
        for (let i = 0; i < 5; i += 1){
            if (testBoard.getValueAt(0, i) !== 0) {
                flag = false;
                break;
            }
        }
        expect(flag).toBe(true);
    })

    test("Ship is placed vertically in expected coordinates", () => {
        testBoard.placeShip(0, 1, 3, 'vertical');
        let flag = true;
        for (let i = 0; i < 3; i++){
            if (testBoard.getValueAt(i,1) !== 0) {
                flag = false;
                break;
            }
        }
        expect(flag).toBe(true);
    })

    test("Ship can't be placed out of bounds", () => {
        testBoard.placeShip(7, 7, 5, 'horizontal');
        expect(testBoard.getValueAt(7, 7)).toBe(6);
    })

    test.only("Ship can't be placed on top of other", () => {
        testBoard.placeShip(0, 0, 5, 'horizontal');
        testBoard.placeShip(1, 0, 5, 'vertical');
        expect(testBoard.getValueAt(1, 1)).toBe(6);
    })

    test("Attack is registered correctly and ship is hit", () => {
        testBoard.placeShip(6, 6, 3, horizontal);
        testBoard.receiveAttack(6, 6);
        expect(testBoard.getValueAt(6, 6)).toBe(2);
    })

    test('Attack is registred correctly but hits nothing', () => {
        testBoard.receiveAttack(3, 3);
        expect(testBoard.getValueAt(3, 3)).toBe(7);
    })

})
    