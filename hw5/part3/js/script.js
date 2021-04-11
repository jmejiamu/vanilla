
function createTable(tableData) {

  var table = document.createElement('table');
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

createTable([["State Abbr", "State Name", "Capital", "Population"], ["row 2, cell 1", "row 2, cell 2"], ["row 2, cell 1", "row 2, cell 2"]]);

// function generate_table() {
//   // get the reference for the body
//   var body = document.getElementsByTagName("body")[0];

//   // creates a <table> element and a <tbody> element
//   var tbl = document.createElement("table");
//   var tblBody = document.createElement("tbody");

//   // creating all cells
//   for (var i = 0; i < 2; i++) {
//     // creates a table row
//     var row = document.createElement("tr");

//     for (var j = 0; j < 2; j++) {
//       // Create a <td> element and a text node, make the text
//       // node the contents of the <td>, and put the <td> at
//       // the end of the table row
//       var cell = document.createElement("td");
//       var cellText = document.createTextNode("cell in row " + i + ", column " + j + "anotherrr " + ", heree ");
//       cell.appendChild(cellText);
//       row.appendChild(cell);
//     }

//     // add the row to the end of the table body
//     tblBody.appendChild(row);
//   }

//   // put the <tbody> in the <table>
//   tbl.appendChild(tblBody);
//   // appends <table> into <body>
//   body.appendChild(tbl);
//   // sets the border attribute of tbl to 2;
//   tbl.setAttribute("border", "2");
// }

console.log("Testts");

// function addTable() {
//   var myTableDiv = document.getElementById("myDynamicTable");

//   var table = document.createElement('TABLE');
//   table.border = '1';

//   var tableBody = document.createElement('TBODY');
//   table.appendChild(tableBody);

//   for (var i = 0; i < 3; i++) {
//     var tr = document.createElement('TR');
//     tableBody.appendChild(tr);

//     for (var j = 0; j < 4; j++) {
//       var td = document.createElement('TD');
//       td.width = '75';
//       td.appendChild(document.createTextNode("Cell " + i + "," + j));
//       tr.appendChild(td);
//     }
//   }
//   myTableDiv.appendChild(table);
// }
// addTable();