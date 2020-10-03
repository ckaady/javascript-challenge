// define variable and import data from data.js
var tableData = data,
    button = d3.select("#filter-btn"),
    reset = d3.select("#reset-btn")
    form = d3.select("form"),
    tbody = d3.select("tbody");


console.log(tableData);

// YOUR CODE HERE!

// loop through data and append values
data.forEach(ufoReport => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value => {
        let cell = row.append("td");
        cell.text(value);
        console.log(value);
    });
});

// event handler
const runEnter = () => {
    // prevent page refresh when submitting
    d3.event.preventDefault();

    // clear previous table
    tbody.html("");

    // input element and value property
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("#value");

    // check inputValue
    console.log(inputValue);

}



    