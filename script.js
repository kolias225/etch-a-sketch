function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    
    const squareSize = Math.floor(960 / size);

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });

        container.appendChild(square);
    }
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