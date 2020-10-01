// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!

// reference table
let tbody = d3.select("tbody")

// loop through data and append values
data.forEach(ufoReport => {
    let row = tbody.append("tr");
    Object.values(ufoReport).forEach(value => {
        let cell = row.append("td");
        console.log(value);
    });
});


    