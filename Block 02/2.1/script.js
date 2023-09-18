const data = document.getElementsByClassName('voy-qb-item-value1 voy-wikidata-content');
if (data.length > 0){
  const firstInnerText = data[0].innerText;
  console.log(firstInnerText);
}

const regionen = document.getElementsByClassName('voy-regionname');
console.log(regionen.length);



var natureName = document.querySelectorAll('[data-group="nature"] .p-name');
natureName.forEach(function(pName) {
  console.log(pName.textContent);
});

 
console.log(natureName)