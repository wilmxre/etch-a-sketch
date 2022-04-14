const container = document.querySelector('.container');
const squares = document.createElement('div');
squares.classList.add('squares');

let gridSize = 16;

let generateSquares = (size) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('id', `itm-${i + 1}-by-${j + 1}`)
      squares.appendChild(square);
    }
  }

  return squares;
}

container.appendChild(generateSquares(gridSize));

squares.childNodes.forEach(element => {
  element.addEventListener('mouseover', (e) => e.target.style = 'background-color: red;');
});

const clearBtn = document.querySelector('#clear');
let clearAndResize = () => {
  console.log(1);
  squares.childNodes.forEach(element => {
    element.style = 'background-color: white;';
  });

  gridSize = parseInt(prompt('Enter the size of your new canvas!'));
  squares.textContent = '';
  generateSquares(gridSize);
}

clearBtn.addEventListener('click', clearAndResize);