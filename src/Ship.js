
class Ship{

    #hits = 0;

    #length;

    constructor(length) {
        this.#length = length;
    }

    hit(){
        this.#hits += 1;
    }

    isSunk() {

        return this.#length === this.#hits;
    } 

    get length() {
        return this.#length;
    }

}

export default Ship;