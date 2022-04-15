const container = document.querySelector('.container');
const squares = document.createElement('div');
squares.classList.add('squares');
const clearBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');

let gridSize = 16;

let generateSquares = (size) => {
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('id', `itm-${i + 1}-by-${j + 1}`)
      squares.append(square);
    }
  }

  return squares;
}

let fillWithColor = () => {
  squares.childNodes.forEach(element => {
    element.addEventListener('mouseover', (e) => e.target.style = 'background-color: red;');
  });
}

let clearSketchpad = () => {
  squares.childNodes.forEach(element => {
    element.style = 'background-color: white;';
  });
}

let resizeSketchpad = () => {
  gridSize = parseInt(prompt('Enter the size of your new canvas!'));
  squares.textContent = '';
  container.style = `--size: ${gridSize}`;
  generateSquares(gridSize);
  fillWithColor();
}

window.onload = () => {
  container.appendChild(generateSquares(gridSize));
  fillWithColor();
  clearBtn.addEventListener('click', clearSketchpad);
  resizeBtn.addEventListener('click', resizeSketchpad);
}

console.log(squares.childNodes)