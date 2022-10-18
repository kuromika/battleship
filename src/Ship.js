
class Ship{

    #hits;

    #length;

    construnctor(length) {
        this.#length = length;
    }

    hit(){
        this.#hits += 1;
    }

    isSunk() {
        return this.#length === this.#hits;
    } 

}

export default Ship;