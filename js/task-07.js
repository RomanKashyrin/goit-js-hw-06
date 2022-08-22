const inputEl = document.querySelector(`#font-size-control`);
const spanEL = document.querySelector(`#text`);

inputEl.addEventListener(`mousemove`, () => {
    spanEL.style.fontSize = `${inputEl.value} px`;
});

