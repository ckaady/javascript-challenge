// define variable and import data from data.js
let tableData = data,
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
        console.log(value);
    });
});

// 


    