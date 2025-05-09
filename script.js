let currentMode = 'draw';

document.getElementById('draw').addEventListener('click', () => {
    currentMode = 'draw';
});
document.getElementById('erase').addEventListener('click', () => {
    currentMode = 'erase';
});
document.getElementById('rainbow').addEventListener('click', () => {
    currentMode = 'rainbow';
});

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

createGrid(16);

document.getElementById('resize-button').addEventListener('click', () => {
    let size = parseInt(prompt('enter grid size from 1 to 100'), 10);

    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert('Please, enter number from 1 to 100');
    }
});