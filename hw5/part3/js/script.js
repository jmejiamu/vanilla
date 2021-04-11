
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

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


