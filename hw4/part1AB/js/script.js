let sum = 0;
let mul = 1;

// For Loop
for (let i = 5; i <= 25; i += 4) {
    sum += i;
    mul *= i;

}
document.getElementById("sum").innerHTML = `<h3>The sum of 5 + 9 + 13 + 17 + 21 + 25 is : ${sum} </h3>`
document.getElementById("mul").innerHTML = `<h3>The multiplication of 5 * 9 * 13 * 17 * 21 * 25 is : ${mul.toLocaleString()} </h3>`

// While Loop
let sumWhile = 0;
let mulWhile = 1;
let counter = 3
while (counter <= 18) {
    sumWhile += counter;
    mulWhile *= counter;
    counter += 3;
}
document.getElementById("sumW").innerHTML = `<h3>The sum of 3 + 6 + 9 + 12 + 15 + 18 is : ${sumWhile} </h3>`
document.getElementById("mulW").innerHTML = `<h3>The multiplication of 3 * 6 * 9 * 12 * 15 * 18 is : ${mulWhile.toLocaleString()} </h3>`
