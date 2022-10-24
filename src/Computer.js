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
        const move = this.#possibleAttacks[moveIndex];
        this.#possibleAttacks.splice(moveIndex, 1);
        return move;
    }
}
    
export default Computer;