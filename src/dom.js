import {player, computer} from './game'
import './style.css';

const playerMatrix = document.querySelector('#player');
const computerMatrix = document.querySelector('#computer');

function populateMatrixes() {
    for (let i = 0; i < 10; i += 1){
        for (let j = 0; j < 10; j += 1){
            const div = document.createElement('div');
            div.setAttribute('x', i);
            div.setAttribute('y', j);
            div.classList.add('empty');
            playerMatrix.append(div.cloneNode(true));
            computerMatrix.append(div);
        }
    }
}


function initialize() {
    populateMatrixes();
}



export default initialize;
