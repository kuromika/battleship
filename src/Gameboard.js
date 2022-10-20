import Ship from "./Ship";

class Gameboard {

    #matrix = [];

    #ships = [];

    constructor() {
        this.#initialize();
    }

    #initialize() {
        this.#createMatrix();
    }
    
    #createMatrix() {
        for (let i = 0; i < 10; i += 1){
            this.#matrix.push([]);
            for (let j = 0; j < 10; j += 1){
                this.#matrix[i].push(6);
            }
        }
    }

    placeShip(x, y, length, orientation) {
        if (orientation === 'horizontal') {
            return this.#placeHorizontal(x, y, length);
        }
        return this.#placeVertical(x, y, length);
    }

    #isValidHorizontal(x, y, length) {
        if (y + length < 10) {
            for (let i = y; i < y + length; i += 1){
                if (this.#matrix[x][i] !== 6) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    #placeHorizontal(x, y, length) {
        if (this.#isValidHorizontal(x, y, length)) {
            for (let i = y; i < y + length; i += 1) {
                this.#matrix[x][i] = this.#ships.length;
            }
            this.#ships.push(new Ship(length));
            return true;
        }
        return false;
    }

    #isValidVertical(x, y, length) {
        if (x + length < 10) {
            for (let i = x; i < x + length; i += 1){
                if (this.#matrix[i][y] !== 6) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    #placeVertical(x, y, length) {
        if (this.#isValidVertical(x,y,length)) {
            for (let i = x; i < x + length; i += 1){
                this.#matrix[i][y] = this.#ships.length;
            }
            this.#ships.push(new Ship(length));
            return true;
        }
        return false;   
    }



    getValueAt(x, y) {
        return this.#matrix[x][y];
    }
}
export default Gameboard;