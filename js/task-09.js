function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body');

const colorChangerBtn = document.querySelector('.change-color');

const colorEl = document.querySelector('.color');

colorChangerBtn.addEventListener('click', () => {
  const colorChanger = bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = colorChanger;
});