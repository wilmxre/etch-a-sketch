const container = document.querySelector('.container');
const squares = document.createElement('div');
squares.classList.add('squares');
const clearBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');
const colorPicker = document.getElementById("colorPicker");

let gridSize = 16;
let option = 'mouseover';

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

let fillWithColor = (color) => {
  squares.childNodes.forEach(element => {
    let bgColor = '';
    let add = 51;
    let addHex = '';

    element.addEventListener('mouseover', (e) => {
      addHex = add.toString(16);
      bgColor = color.concat(addHex);
      e.target.style = `background-color: ${bgColor};`;
      if (add < 255) add += 51;
    });

  });
}

let removeColor = () => {
  squares.childNodes.forEach(element => {
    element.addEventListener('dblclick', (e) => e.target.style = 'background-color: white;');
  });
}

let clearSketchpad = () => {
  squares.childNodes.forEach(element => {
    element.style = 'background-color: white;';
  });
}

let resizeSketchpad = () => {
  while (true) {
    gridSize = parseInt(prompt('Enter the size of your new canvas! (1 to 100)'));
    if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
      alert("You didn't enter a valid number!");
    }
    else break;
  }
  squares.textContent = '';
  container.style = `--size: ${gridSize}`;
  generateSquares(gridSize);
  setColor();
}

function setColor() {
  fillWithColor(colorPicker.value);
}

window.onload = () => {
  container.appendChild(generateSquares(gridSize));
  setColor();
  removeColor();

  colorPicker.addEventListener("input", setColor);
  clearBtn.addEventListener('click', clearSketchpad);
  resizeBtn.addEventListener('click', resizeSketchpad);
}