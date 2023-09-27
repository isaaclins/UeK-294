  function getRandomCountry(){
    var allCountries = document.querySelectorAll('.country');
    var randomIndex = Math.floor(Math.random() * allCountries.length);
    console.log(randomIndex);
    allCountries[randomIndex]
  }
  
  const myButton = document.getElementById('choose')
  function michael() {
    var selectedCountry = document.getElementsByClassName('chosen');

    if (selectedCountry.length > 0) {
      selectedCountry[0].classList.remove('chosen');
    }
      var allCountries = document.querySelectorAll('.country');
      var randomIndex = Math.floor(Math.random() * allCountries.length);
      console.log(randomIndex);
      console.log(allCountries[randomIndex]);
      allCountries[randomIndex].classList.add('chosen');


  }
  
  myButton.onclick = michael;
