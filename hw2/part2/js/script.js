
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
        <p class="alert-error" >Enter valid values, make sure all fields are filled with any number.</p>`
        document.getElementById("result").innerHTML = ""
    } else {

        document.getElementById("result").innerHTML = `
        <p>
        <strong>
        Sum: ${total}<br>
        Product: ${product}<br>
        Average: ${total / 3}<br>
        Max value: ${Math.max(n1, n2, n3)}<br>
        Min value: ${Math.min(n1, n2, n3)}<br>
        </strong>
        </p>`;
        document.getElementById("error").innerHTML = ""
    }

}

const resetResult = () => {
    document.getElementById("result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
}


