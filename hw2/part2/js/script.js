
const sum = () => {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let n3 = parseInt(num3);

    let total = n1 + n2 + n3;
    let product = n1 * n2 * n3;

    if (isNaN(total)) {
        document.getElementById("error").innerHTML = `
        <p class="alert-error">Error you must enter valid values</p>`
        document.getElementById("result").innerHTML = ""
    } else {

        document.getElementById("result").innerHTML = `
        <p>
            Sum: ${total}<br>
            Product: ${product}<br>
            Average: ${total / 3}<br>
            Max value: ${Math.max(n1, n2, n3)}<br>
            Min value: ${Math.min(n1, n2, n3)}<br>
        </p>`;
        document.getElementById("error").innerHTML = ""
    }

}

const resetResult = () => {
    document.getElementById("result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
}


