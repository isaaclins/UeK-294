const square = document.querySelector('#square');

const applyTransition = (timingFunction) => {
  square.style.transition = `all 1.5s ${timingFunction}`;
};

document.querySelector('#button').addEventListener('click', () => {
  applyTransition('ease');
  square.classList.toggle('square-end');
});

document.querySelector('#button-linear').addEventListener('click', () => {
  applyTransition('linear');
  square.classList.toggle('square-end');
});

document.querySelector('#button-ease-in').addEventListener('click', () => {
  applyTransition('ease-in');
  square.classList.toggle('square-end');
});

document.querySelector('#button-ease-out').addEventListener('click', () => {
  applyTransition('ease-out');
  square.classList.toggle('square-end');
});

document.querySelector('#button-ease-in-out').addEventListener('click', () => {
  applyTransition('ease-in-out');
  square.classList.toggle('square-end');
});
