let currentMode = 'draw';

function setMode(mode) {
    currentMode = mode;
    updateActiveButton();
}

function updateActiveButton() {
    const buttons = document.querySelectorAll('#toolbar button');
    buttons.forEach(button => button.classList.remove('active'));

    const activeButton = document.getElementById(currentMode);
    if (activeButton) {
        activeButton.classList.add('active')
    }
}

function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    
    const squareSize = 960 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;


            square.addEventListener('mouseenter', () => {
                if (currentMode === 'draw') {
                    square.style.backgroundColor = 'black';
                } else if (currentMode === 'erase') {
                    square.style.backgroundColor = 'white';
                } else if (currentMode === 'rainbow') {
                    square.style.backgroundColor = getRandomColor();
                }
            });
        

        container.appendChild(square);
    }
};

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

document.getElementById('draw').addEventListener('click', () => setMode('draw'));
document.getElementById('erase').addEventListener('click', () => setMode('erase'));
document.getElementById('rainbow').addEventListener('click', () => setMode('rainbow'));

document.getElementById('clearAll').addEventListener('click', () => {
    const squares = document.querySelectorAll('.grid-square');
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    });
}); 


createGrid(16);
setMode('draw');

document.getElementById('resize-button').addEventListener('click', () => {
    let size = parseInt(prompt('enter grid size from 1 to 100'), 10);

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please, enter number from 1 to 100');
    }
});