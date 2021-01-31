
const sum = () => {

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;

    let total = parseInt(num1) + parseInt(num2) + parseInt(num3);
    let product = parseInt(num1) * parseInt(num2) * parseInt(num3);

    if (isNaN(total)) {
        document.getElementById("error").innerHTML = "Error"
    } else {

        document.getElementById("result").innerHTML = `
        <p>Sum: ${total}
            Product: ${product}
            Average: ${total / 3}
        </p>`;
    }

}

const resetResult = () => {
    document.getElementById("result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
}


