let counterValue = 0;
const increment = () => {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
};

document
  .querySelector("[data-action='increment']")
  .addEventListener('click', increment);

document
  .querySelector("[data-action='decrement']")
  .addEventListener('click', decrement);



  // let counterValue = document.querySelector("#value");

// const addOne = document.querySelector('button[data-action="increment"]');

// addOne.addEventListener("click", () => {
//     counterValue.textContent += 1;
// });

// const removeOne = document.querySelector('button[data-action="decrement"]');

// removeOne.addEventListener("click", () => {
//     counterValue.textContent -= 1;
// });
