// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#date_time');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call editSearch when clicked
$searchBtn.addEventListener('click', editSearch);

var ufoDataset = dataSet;

function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < ufoDataset.length; i++) {
    var ufodata = ufoDataset[i];
    var fields = Object.keys(ufodata);
   
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
     
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufodata[field];
    }
  }
}

function editSearch() {
    var cleanInput = $dateInput.value;
    ufoDataset = dataSet.filter(function(ufodata){
        var ufoDate = ufodata.datetime;
        return ufoDate === cleanInput;
    });
    renderTable();
}

renderTable();