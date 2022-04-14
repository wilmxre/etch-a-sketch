const container = document.querySelector('.container');
const squares = document.createElement('div');
squares.classList.add('squares');

const gridSize = 16;
for (let i = 0; i < gridSize; i++) {
  for (let j = 0; j < gridSize; j++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('id', `itm-${i + 1}-by-${j + 1}`)
    squares.appendChild(square);
  }
}

container.appendChild(squares);

Array.from(squares.childNodes).forEach(element => {
  element.addEventListener('click', (e) => e.target.style = 'background-color: red;');
});
