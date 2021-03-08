let sum = 0;
let mul = 1;

const showResults = () => {
    for (let i = 5; i <= 25; i += 4) {
        sum += i;
        mul *= i;

    }
    document.getElementById("sum").innerHTML = `<h1>The sum of 5 + 9 + 13 + 17 + 21 + 25 is : ${sum} </h1>`
    document.getElementById("mul").innerHTML = `<h1>The multiplication of 5 * 9 * 13 * 17 * 21 * 25 is : ${mul.toLocaleString()} </h1>`
}
