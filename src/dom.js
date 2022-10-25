import { getComputer, getPlayer, isOver} from './game';
import './style.css';

const playerMatrix = document.querySelector('#player');
const computerMatrix = document.querySelector('#computer');
const values = { 6: 'explored', 7: 'hit' }

function populateMatrixes() {
    for (let i = 0; i < 10; i += 1){
        for (let j = 0; j < 10; j += 1){
            const div = document.createElement('div');
            div.setAttribute('x', i);
            div.setAttribute('y', j);
            div.textContent = `${i}, ${j}`
            div.className = 'empty';
            playerMatrix.append(div.cloneNode(true));
            div.classList.add('hidden');
            computerMatrix.append(div);
        }
    }
}


function updateMatrix(matrix, board) {

    for (let i = 0; i < 10; i += 1){
        for (let j = 0; j < 10; j += 1){
            if (board.matrix[i][j] !== 5) {
                const cell = matrix.querySelector(`[x="${i}"][y="${j}"]`);
                cell.classList.add(values[board.matrix[i][j]]);
            }
        }
    }
}


function updateBoards() {
    updateMatrix(computerMatrix, getComputer().board);
    updateMatrix(playerMatrix, getPlayer().board);
}

function attackPlayer() {
    const [x, y] = getComputer().getNextMove();
    getPlayer().board.receiveAttack(x,y)
}


function addCover() {
    const cover = document.createElement('div');
    cover.classList.add('cover');
    computerMatrix.append(cover);
}

function gameOver(status) {
    if (status) {
        const header = document.querySelector('header');
        const winnerText = document.createElement('p');
        const text = `The ${status === 1 ? 'computer' : 'player'} has won the game.`
        winnerText.textContent = text;
        header.after(winnerText);
        addCover();
      
    }
}


function gameLoop(x, y) {
    const hitValue = getComputer().board.receiveAttack(x, y);
    if (hitValue) {
        attackPlayer();
        updateBoards();
        gameOver(isOver());
        return true;
    }
    return false;
}

function addCellListeners() {
    const cells = computerMatrix.childNodes;
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            const x = e.target.getAttribute('x');
            const y = e.target.getAttribute('y');
            if (gameLoop(x, y)) {
                e.target.classList.remove('hidden');
            }
        })
    })
}

function addButtonListener() {
    const placeButton = document.querySelector('.place');
    placeButton.addEventListener('click', () => {
        const x = document.querySelector('#x');
        const y = document.querySelector('#y');
        const length = document.querySelector('#ships');
        const direction = document.querySelector('input[name="orientation"]:checked').value;
        if (x.value.length !== 0 && y.value.length !== 0) {
            if (getPlayer().board.placeShip(+x.value, +y.value, +length.value, direction)) {
                length.querySelector(`option[value="${+length.value}"]`).remove();
                 updateMatrix(playerMatrix, getPlayer().board);
            };
        }
        if (length.childElementCount === 0) {
            placeButton.disabled = true;
            document.querySelector('.cover').remove();
        }
    })
}

function initialize() {
    for (let i = 0; i < 5; i += 1){
        values[i] = 'occupied';
    }
    addCover();
    addButtonListener();
    populateMatrixes();
    addCellListeners();
    updateBoards();

}



export default initialize;
