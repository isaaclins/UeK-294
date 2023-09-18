const data = document.getElementsByClassName('voy-qb-item-value1 voy-wikidata-content');
if (data.length > 0){
  const firstInnerText = data[0].innerText;
  console.log(firstInnerText)
}
