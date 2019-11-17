// from data.js
var tableData = data;

var tbody = d3.select("tbody")

data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//filter button
var button = d3.select("#filter-btn");

button.on("click", function() {
  
  //Define Input Element Variable
  var inputElement = d3.select('#datetime');



  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  // d3.event.prevent.Default()

  console.log(inputValue);
  console.log(inputElement);

  //need variable to store filtered data in.
  var filteredData = tableData.filter(data => data.datetime === inputValue);
  console.log(filteredData)

});  