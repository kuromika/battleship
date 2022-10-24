import Player from "./Player";
import Computer from "./Computer"
import randomDirection from "./util";

const player = new Player();
const computer = new Computer();


function populateBoards() {
    player.board.placeShip(0, 0, 3, 'horizontal');
    player.board.placeShip(7, 7, 5, 'horizontal');
    player.board.placeShip(1, 2, 3, 'vertical');
    player.board.placeShip(5, 5, 2, 'vertical');
}

function placeComputerShips() {
    const tempComputer = new Computer();
    const ships = [5, 4, 3, 3, 2];
    let pos = tempComputer.getNextMove();
    let pointer = 0;
    while (pointer < 5) {
        if (computer.board.placeShip(pos[0], pos[1], ships[pointer], randomDirection())) {
            pointer += 1;
        }
        pos = tempComputer.getNextMove();
    }
}

placeComputerShips();
populateBoards();

function isOver() {
    if (player.board.hasLost()) {
        return 1;
    }

    if (computer.board.hasLost()) {
        return -1;
    }

    return 0;
}

const getPlayer = () => player;
const getComputer= () => computer;

export { getComputer, getPlayer,isOver }