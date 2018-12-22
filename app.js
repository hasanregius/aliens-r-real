// Variable setting
var tableData = data;
var submit = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// Render function
function render_table() {
    tableData.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
          var cell = tbody.append("td");
          cell.text(value);
        })
    })
};

// Search table render
function filtered_table(input) {
    tbody.html("");
    input.forEach((item) => {
        var row = tbody.append("tr");
        Object.entries(item).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

// Operator for the search button 
submit.on("click", function() {
    var date_input = d3.select("#datetime").property("value");
    var filtered_data = tableData.filter(item => item.datetime === date_input);
    filtered_table(filtered_data);
});

render_table();
