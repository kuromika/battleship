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

export {player, computer}