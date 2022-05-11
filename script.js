const container = document.querySelector('.container');
const squares = document.createElement('div');
squares.classList.add('squares');
const clearBtn = document.querySelector('#clear');
const resizeBtn = document.querySelector('#resize');
const colorPicker = document.querySelector("#colorPicker");
const wrapper = document.querySelector('.colorPicker-wrapper');

squares.setAttribute('oncontextmenu', 'return false');
let gridSize = 5;
let scale = window.innerWidth;

if (scale <= 550 && scale > 440) {
  gridSize = 8;
}
else if (scale <= 440) {
  gridSize = 6;
}

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
    let add = 102;
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
    element.addEventListener('contextmenu', (e) => e.target.style = 'background-color: #d6d6d6;');
  });
}

let clearSketchpad = () => {
  squares.childNodes.forEach(element => {
    element.style = 'background-color: #d6d6d6;';
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
  removeColor();
}

setColor = () => {
  wrapper.style.backgroundColor = colorPicker.value;
  fillWithColor(colorPicker.value);
}

triggerEvent = () => wrapper.addEventListener('click', () => {
  colorPicker.click();
});

window.onload = () => {
  container.appendChild(generateSquares(gridSize));
  setColor();
  removeColor();
  triggerEvent();

  colorPicker.addEventListener("input", setColor);
  clearBtn.addEventListener('click', clearSketchpad);
  resizeBtn.addEventListener('click', resizeSketchpad);
}