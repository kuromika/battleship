import { getComputer, getPlayer} from './game';
import './style.css';

const playerMatrix = document.querySelector('#player');
const computerMatrix = document.querySelector('#computer');

function populateMatrixes() {
    for (let i = 0; i < 10; i += 1){
        for (let j = 0; j < 10; j += 1){
            const div = document.createElement('div');
            div.setAttribute('x', i);
            div.setAttribute('y', j);
            div.className = 'empty';
            playerMatrix.append(div.cloneNode(true));
            computerMatrix.append(div);
        }
    }
}


function updateMatrix(matrix, board) {
    const values = { 6: 'explored', 7: 'hit' }
    for (let i = 0; i < 5; i += 1){
        values[i] = 'occupied';
    }

    for (let i = 0; i < 10; i += 1){
        for (let j = 0; j < 10; j += 1){
            if (board.matrix[i][j] !== 5) {
                const cell = matrix.querySelector(`[x="${i}"][y="${j}"]`);
                cell.className = values[board.matrix[i][j]];
            }
        }
    }
}

function updateBoards() {
    updateMatrix(computerMatrix, getComputer().board);
    updateMatrix(playerMatrix, getPlayer().board);
}


function addListeners() {
    const cells = computerMatrix.childNodes;
    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            const x = e.target.getAttribute('x');
            const y = e.target.getAttribute('y');
            const hitValue = getComputer().board.receiveAttack(x, y);
            if (hitValue) {
                updateBoards();
            }

        })
    })
}



function initialize() {
    populateMatrixes();
    addListeners();
    updateBoards();
}



export default initialize;
