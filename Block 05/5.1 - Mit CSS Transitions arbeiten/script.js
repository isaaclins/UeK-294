const button = document.querySelector('#button');
const square = document.querySelector('#square');

button.onclick = () => {
  square.classList.toggle('square-end');
};