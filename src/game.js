import Player from "./Player";
import Computer from "./Computer"

const player = new Player();
const computer = new Computer();


function populateBoards() {
    player.board.placeShip(0, 0, 3, 'horizontal');
    player.board.placeShip(7, 7, 5, 'horizontal');
    player.board.placeShip(1, 2, 3, 'vertical');
    player.board.placeShip(5, 5, 2, 'vertical');

    computer.board.placeShip(0, 0, 3, 'horizontal');
    computer.board.placeShip(1, 2, 3, 'vertical');
    computer.board.placeShip(5, 5, 2, 'vertical');
    computer.board.placeShip(7, 7, 5, 'horizontal');
}

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