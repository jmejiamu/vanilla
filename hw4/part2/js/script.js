// formula P(1 + r)^n
// 1000(1 + 0.05)**1
// ###################### TABLE ONE #########################
let p = 1000;
let percent = 0.05;
let n = 1 + percent;
document.write("<h1>Interest at 5%</h1>")

document.write("<table>")
document.write("<tr>")
document.write("<th>Year</th>")
document.write("<th>Amount on deposit</th>")
document.write("<th>Interest Rate</th>")
document.write("</tr>")
for (row = 1; row <= 10; row++) {
    let result = p * n ** row;

    document.write("<tr>")
    document.write(`<td>${row}</td>`)
    document.write(`<td>${result.toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</td>`)
    document.write(`<td>${percent}</td>`)
    // for (col = 1; col <= 3; col++) {
    // document.write("<td>" + row + "</td>")
    // document.write(`
    // <td>hh</td>
    // `)
    // }
    document.write("</tr>")
}
document.write("</table>")

document.write("<br>")
document.write("<br>")

// ###################### END TABLE ONE #########################

// ###################### TABLE TWO #########################
let ptbTwo = 1000;
let percentTbTwo = 0.06;
let ntbTwo = 1 + percentTbTwo;


document.write("<h1>Interest at 6%</h1>")
document.write("<table>")
document.write("<tr>")
document.write("<th>Year</th>")
document.write("<th>Amount on deposit</th>")
document.write("<th>Interest Rate</th>")
document.write("</tr>")
for (row = 1; row <= 10; row++) {
    let result = ptbTwo * ntbTwo ** row;

    document.write("<tr>")
    document.write(`<td>${row}</td>`)
    document.write(`<td>${result.toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</td>`)
    document.write(`<td>${percentTbTwo}</td>`)
    document.write("</tr>")
}
document.write("</table>")

// ###################### END TABLE TWO #########################

// ###################### TABLE THREE #########################
let ptbThree = 1000;
let percentTbThree = 0.07;
let ntbThree = 1 + percentTbThree;


document.write("<h1>Interest at 7%</h1>")
document.write("<table>")
document.write("<tr>")
document.write("<th>Year</th>")
document.write("<th>Amount on deposit</th>")
document.write("<th>Interest Rate</th>")
document.write("</tr>")
for (row = 1; row <= 10; row++) {
    let result = ptbThree * ntbThree ** row;

    document.write("<tr>")
    document.write(`<td>${row}</td>`)
    document.write(`<td>${result.toLocaleString(undefined,
        { 'minimumFractionDigits': 2, 'maximumFractionDigits': 2 })}</td>`)
    document.write(`<td>${percentTbThree}</td>`)
    document.write("</tr>")
}
document.write("</table>")

// ###################### END TABLE THREE #########################