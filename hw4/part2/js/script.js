// formula P(1 + r)^n
// 1000(1 + 0.05)**1
let p = 1000;
let percent = 0.05
let n = 1 + percent;
// console.log(p * n ** 2)
let total = p * n;


for (let i = 1; i <= 10; i++) {
    console.log(p * n ** i);
}


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

const test = (test1) => {
    document.getElementById("tb1").innerHTML = `<p>Thisis  ${test1}</p>`
}


window.onload = () => {

    test("This is a parametter")
}
window.onload = () => {

    test("Nother test ")
}
