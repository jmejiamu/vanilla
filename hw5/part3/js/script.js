
function createTable(tableData) {

    var table = document.createElement('table');
    table.setAttribute('id', 'myTable');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function (rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function (cellData) {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
}

createTable([
    ["State Abbr", "State Name", "Capital", "Population"],
    ["AL", "Alabama", "Montgomery", "4,903,185"],
    ["AK", "Alaska", "Juneau", "731,545"],
    ["AZ", "Arizona", "Phoenix", "7,278,717"],
    ["AR", "Arkansas", "Little Rock", "3,017,825"],
    ["CA", "California", "Sacramento", "39,512,223"],
    ["CO", "Colorado", "Denver", "5,758,736"],
]);



