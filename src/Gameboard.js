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
                this.#matrix[i].push(5);
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
                if (this.#matrix[x][i] !== 5) {
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
                if (this.#matrix[i][y] !== 5) {
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

    receiveAttack(x, y) {
        if (this.#matrix[x][y] < 5) {
            this.#ships[this.#matrix[x][y]].hit();
            this.#matrix[x][y] = 7;
            return 1;
        }

        if (this.#matrix[x][y] === 5) {
            this.#matrix[x][y] = 6;
            return -1;
        }

        return 0;
    }

    hasLost() {
        for (let i = 0; i < this.#ships.length; i += 1){
            if (!this.#ships[i].isSunk()) {
                return false;
            }
        }
        return true;
    }

    get matrix() {
        return this.#matrix;
    }

    getValueAt(x, y) {
        return this.#matrix[x][y];
    }
}


export default Gameboard;