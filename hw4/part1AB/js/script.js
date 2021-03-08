let sum = 0;
let mul = 1;

// For Loop
for (let i = 5; i <= 25; i += 4) {
    sum += i;
    mul *= i;

}
document.getElementById("sum").innerHTML = `<h1>The sum of 5 + 9 + 13 + 17 + 21 + 25 is : ${sum} </h1>`
document.getElementById("mul").innerHTML = `<h1>The multiplication of 5 * 9 * 13 * 17 * 21 * 25 is : ${mul.toLocaleString()} </h1>`

// While Loop
let sumWhile = 0;
let mulWhile = 1;
let counter = 3
while (counter <= 18) {
    sumWhile += counter;
    mulWhile *= counter;
    counter += 3;
}
document.getElementById("sumW").innerHTML = `<h1>The sum of 5 + 9 + 13 + 17 + 21 + 25 is : ${sumWhile} </h1>`
document.getElementById("mulW").innerHTML = `<h1>The multiplication of 5 * 9 * 13 * 17 * 21 * 25 is : ${mulWhile.toLocaleString()} </h1>`

console.log(sumWhile);
console.log(mulWhile);
