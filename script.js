const container = document.querySelector('.container');
const squares = document.createElement('div');
squares.classList.add('squares');

let gridSize = 16;

let generateSquares = (size) => {
  for (let i = 0; i < size; i++) {
    const squareRow = document.createElement('div');
    squareRow.classList.add('square-row', `square-row-${i + 1}`);
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('id', `itm-${i + 1}-by-${j + 1}`)
      squareRow.appendChild(square);
    }
    squares.append(squareRow);
  }


  return squares;
}

container.appendChild(generateSquares(gridSize));

squares.childNodes.forEach(element => {
  element.addEventListener('mouseover', (e) => e.target.style = 'background-color: red;');
});

const clearBtn = document.querySelector('#clear');
let clearAndResize = () => {
  squares.childNodes.forEach(element => {
    element.style = 'background-color: white;';
  });

  gridSize = parseInt(prompt('Enter the size of your new canvas!'));
  squares.textContent = '';
  generateSquares(gridSize);
}

clearBtn.addEventListener('click', clearAndResize);