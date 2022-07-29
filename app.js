const container = document.querySelector('.grid-container');
const clearButton = document.querySelector('.clear-btn');
const sizeButton = document.querySelector('.size-btn');
const gridContainer = document.querySelector('.grid-container');
const rainbowButton = document.querySelector('.rainbow-btn')
const DEFAULT_SIZE = 16;
let current_size = DEFAULT_SIZE;

function board_size(size) {
    return size * size;
}

function createBoard(dimSize, totSize) {
    for (let i = 1; i <= totSize; i++) {
        gridContainer.setAttribute('style', `grid-template-columns: repeat(${dimSize}, 1fr);  grid-template-rows: repeat(${dimSize}, 1fr);`); 
        let newDiv = document.createElement('div')
        newDiv.className = 'grid-item';
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', 
        e => e.target.classList.add('div-color-class')
        )
    }
}
createBoard(DEFAULT_SIZE, board_size(DEFAULT_SIZE))

sizeButton.addEventListener('click', () => {
    let user_size = parseInt(prompt("Enter a number 1 through 100 to resize board: "));
    let coloredDiv = document.querySelectorAll('.div-color-class');
    for (let i = 0; i < coloredDiv.length; i++) {
        coloredDiv[i].classList.remove('div-color-class');
    }
    createBoard(user_size, board_size(user_size))
})

clearButton.addEventListener('click', () => {
    let coloredDiv = document.querySelectorAll('.div-color-class');
    for (let i = 0; i < coloredDiv.length; i++) {
        coloredDiv[i].classList.remove('div-color-class');
    }
})




