const container = document.querySelector('.grid-container');
const DEFAULT_SIZE = 16;

let current_size = DEFAULT_SIZE;
//let user_size =parseInt(prompt("Enter a number 1 through 100 to resize board: "))

function board_size(size) {
    return size * size;
}

 for (let i = 1; i <= 10000; i++) {
     let newDiv = document.createElement('div')
     newDiv.className = 'grid-item';
     newDiv.id = `G${i}`;
     container.appendChild(newDiv)
 }