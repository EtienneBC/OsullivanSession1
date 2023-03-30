// let wordlist = ['horse', 'house', 'audio', 'tesla', 'plane'];
import { wordlist } from './words.js';

let gameState = {
    gameGrid: Array(6).fill().map(() => Array(5).fill('')),
    currentRow: 0,
    currentCol: 0,
    hiddenWord: wordlist[Math.floor(Math.random()*wordlist.length)],
}

function init() {
    const gameContainer = document.getElementById('gameContainer');
    makeGameGrid(gameContainer);
    console.log(gameState.hiddenWord);
    keyboardpressed();
}

function makeGameGrid(gameContainer) {
    const gameGrid = document.createElement('div');
    gameGrid.className = 'gameGrid';

    for (let row = 0; row < 6; row++) {
        for (let colonne = 0; colonne < 5; colonne++) {
            makeBox(gameGrid, row, colonne);
        }
    }
    gameContainer.appendChild(gameGrid)
}

function makeBox(gameGrid, row, colonne, letter = '') {
    const charBox = document.createElement('div');
    charBox.className = 'charBox';
    charBox.id = 'charBox.' + row + ' ' + colonne;
    charBox.textContent = letter;
    gameGrid.appendChild(charBox);
    return charBox;
}

function keyboardpressed() {
    document.body.onkeydown = (e) => {
        let key = e.key;
        if (key === "Enter") {
            let word = getEnteredWord();
            if (isWordValid(word)) {
                checkLetters();
                checkturn(word);
                gameState.currentRow++;
                gameState.currentCol = 0;
            } else {
                alert('Mot non valide!!!! :(');
            }
        }
        if (key === "Backspace") {
            deleteLetter();
        }

        if (isAlpha(key)) {
            addLetter(key)
        }
        updateGameGrid();
    }
}

function checkturn(word) {
    let won = gameState.hiddenWord === word;
    let gameOver = gameState.currentRow === 5;

    if (won) {
        alert('yeah!');
    } else if (gameOver) {
        alert('Game Over! Le bon mot etait: ' + gameState.hiddenWord);
    }
}

function isWordValid(word) {
    return wordlist.includes(word);
}

function checkLetters() {
    for (let i = 0; i < 5; i++) {
        let charBox = document.getElementById('charBox.' + gameState.currentRow + ' ' + i);
        let letter = charBox.textContent;

        if (letter === gameState.hiddenWord[i]) {
            charBox.classList.add('correct');
        } else if (gameState.hiddenWord.includes(letter)) {
            charBox.classList.add('contains');
        } else {
            charBox.classList.add('empty');
        }
    }
}

function getEnteredWord() {
    return gameState.gameGrid[gameState.currentRow].reduce((previous, current) => previous + current);
}

function updateGameGrid() {
    for (let row = 0; row < gameState.gameGrid.length; row++) {
        for (let colonne = 0; colonne < gameState.gameGrid[row].length; colonne++) {
            let charBox = document.getElementById('charBox.' + row + ' ' + colonne);
            charBox.textContent = gameState.gameGrid[row][colonne];
        }
    }
}

function isAlpha(key) {
    return key.length === 1 && key.match(/[a-z]/i);
}

function addLetter(key) {
    if (gameState.currentCol === 5) return;
    gameState.gameGrid[gameState.currentRow][gameState.currentCol] = key;
    gameState.currentCol++;
}

function deleteLetter() {
    if (gameState.currentCol === 0) return;
    gameState.gameGrid[gameState.currentRow][gameState.currentCol-1] = '';
    gameState.currentCol--;
}

init();