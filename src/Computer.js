import Player from "./Player";

class Computer extends Player {

    #possibleAttacks = [];

    constructor() {
        super();
        for (let i = 0; i < 10; i += 1) {
            for (let j = 0; j < 10; j += 1) {
                this.#possibleAttacks.push([i, j]);
            }
        }
    }

    getNextMove(){
        const moveIndex = Math.floor(Math.random() * this.#possibleAttacks.length);
        this.#possibleAttacks.splice(moveIndex, 1);
        return this.#possibleAttacks[moveIndex];
    }
}
    
export default Computer;