// from data.js
var tableData = data;

// get a reference to the table body
const tbody = d3.select("tbody");

// loop through data and append values
data.forEach((ufoReport) => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value =>{
        let cell = row.append("td");
        cell.text(value);
    });
});

// select the button
// select the form - so the "enter" key can be used to submit the selection as well as the button
let button = d3.select("#filter-btn"),
    form = d3.select("#form");

// complete the event handler function for the form
const runEnter = () => {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // clear previous table
    tbody.html("");
    
    // define input element and value property
    // get the value property of the input element

        let inputElement = d3.select("#datetime"),
            inputValue = inputElement.property("value");
  
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
   
    // check if filter is working and returning correct data 
        console.log(filteredData);

    // append filtered values of input element to table
        filteredData.forEach((entry) => {
        let row = tbody.append("tr");
        Object.entries(entry).forEach(function([key, value]) {
            let cell = row.append("td");
            cell.text(value);
        });
});        
};
// create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);


    