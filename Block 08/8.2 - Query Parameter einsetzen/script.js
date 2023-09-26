function plusCounter() {
  counterValue++;
  updateCounterDisplay();
}

function minusCounter() {
  counterValue--;
  updateCounterDisplay();
}

function updateCounterDisplay() {
  counterElement.textContent = counterValue;

  const newURL = `?counter=${counterValue}`;
  history.pushState({ counter: counterValue }, null, newURL);
}

function handlePopstate(event) {
  if (event.state && event.state.counter !== undefined) {
    counterValue = event.state.counter;
    updateCounterDisplay();
  }
}

const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const counterElement = document.getElementById('counter');

plusButton.addEventListener('click', plusCounter);
minusButton.addEventListener('click', minusCounter);

const queryParams = new URLSearchParams(window.location.search);
let counterValue = parseInt(queryParams.get('counter')) || 0;

updateCounterDisplay();

window.addEventListener('popstate', handlePopstate);
