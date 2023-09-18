/*
const fizzbuzzbutton = document.getElementById('fizzbuzzbutton')
const fizzbuzzdiv = document.getElementById('fizzbuzzdiv')
var inhalt = "";


function fizzbuzz() {
  for (let i = 0; i < 101; i++) {
    if (i % 15 == 0) {
      inhalt +='fizzbuzz:';
    } else if (i % 3 == 0) {
      inhalt +='fizz: ';

    } else if (i % 5 == 0) {
      inhalt +='buzz:';
    } else {
    }
  }
  fizzbuzzdiv.innerHTML = inhalt;
}

fizzbuzzbutton.onclick = fizzbuzz;
*/
const fizzbuzzbutton = document.getElementById('fizzbuzzbutton')
const fizzbuzzdiv = document.getElementById('fizzbuzzdiv')
var inhalt = "";

function fizzbuzz() {
  for (let i = 1; i <= 100; i++) { // Start from 1, not 0
    if (i % 15 == 0) {
      inhalt += 'fizzbuzz ';
    } else if (i % 3 == 0) {
      inhalt += 'fizz ';
    } else if (i % 5 == 0) {
      inhalt += 'buzz ';
    } else {
      inhalt += i + ' ';
    }
  }
  fizzbuzzdiv.innerHTML = inhalt;
}

fizzbuzzbutton.onclick = fizzbuzz;
