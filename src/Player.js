import Gameboard from "./Gameboard";

class Player{

    #board;

    #next;

    constructor() {
        this.#board = new Gameboard();
    }

    get board() {
        return this.#board;
    }

    get next() {
        return this.#next;
    }

    set next(player) {
        this.#next = player;
    }

}

export default Player;