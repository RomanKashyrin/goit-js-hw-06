function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divBoxesElem: document.querySelector('#boxes'),
  inputElem: document.querySelector('input'),
  btnCreateElem: document.querySelector('button[data-create]'),
  btnDestroyElem: document.querySelector('button[data-destroy]'),
};

function createBoxes(amount) {
  const divs = [];
  amount = refs.inputElem.value;

  for (let i = 0; i < amount; i += 1) {
    const color = getRandomHexColor();
    console.log(color);
    const boxEl = document.createElement('div');
    console.log(boxEl);
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = color;

    divs.push(boxEl);
  }

  refs.divBoxesElem.append(...divs);
}

function destroyBoxes() {
  refs.divBoxesElem.innerHTML = '';
}

refs.btnCreateElem.addEventListener('click', createBoxes);
refs.btnDestroyElem.addEventListener('click', destroyBoxes);
