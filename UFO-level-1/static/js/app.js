// from data.js
var tableData = data;

//select the tbody in html to render dataset onto.
var tbody = d3.select("tbody")

//populates entire dataset onto html page.
data.forEach((ufoSightings) => {
    var row = tbody.append("tr");
    Object.entries(ufoSightings).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

//filter button
var button = d3.select("#filter-btn");

//function for refresh stop.
var handleInput = () => {
  //Enter key Fix
  d3.event.preventDefault();
  
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

};

// button.on("click", handleInput);
button.on('click', handleInput);

//Enter Key Fix
d3.select("form").on('submit', handleInput);

//will need to loop through filtered results to display new table.

