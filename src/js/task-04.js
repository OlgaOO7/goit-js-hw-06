const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', onIncrement);
decrementBtn.addEventListener('click', onDecremetn);

function onIncrement () {
  counterValue += 1;
  valueEl.textContent = counterValue;
  // console.log(valueEl.textContent);
};

function onDecremetn () {
  counterValue -= 1;
  valueEl.textContent = counterValue;
  // console.log(valueEl.textContent);
};




