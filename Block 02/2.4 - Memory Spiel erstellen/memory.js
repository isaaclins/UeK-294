const cantons = [
  'ag',
  'ar',
  'bl',
  'fr',
  'gl',
  'ju',
  'ne',
  'ow',
  'sh',
  'sz',
  'ti',
  'vd',
  'zg',
  'ai',
  'be',
  'bs',
  'ge',
  'gr',
  'lu',
  'nw',
  'sg',
  'so',
  'tg',
  'ur',
  'vs',
  'zh',
];

const playground = document.getElementById('board');

const getFlagPath = function (canton) {
  return `img/${canton}.png`;
};

document.addEventListener('DOMContentLoaded', function gamesetup() {
  cantons.sort(() => 0.5 - Math.random());

  const singleDeck = cantons.slice(0, 10);

  const fullDeck = singleDeck.concat(singleDeck);

  fullDeck.sort(() => 0.5 - Math.random());

  fullDeck.forEach(function (value) {
    const tileButton = document.createElement('button');
    const tileImage = document.createElement('img');
    tileImage.setAttribute('src', getFlagPath(value));
    tileImage.classList.add('hidden');
    tileButton.appendChild(tileImage);
    tileButton.addEventListener('click', function () {
      tileImage.classList.remove('hidden'); 
    });
    playground.appendChild(tileButton);
  });
});
