const zero = () => {

    // Getting user inputs
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let num3 = document.getElementById("num3").value;
    let num4 = document.getElementById("num4").value;
    let num5 = document.getElementById("num5").value;

    // parse the input to numbers
    let n1 = parseInt(num1);
    let n2 = parseInt(num2);
    let n3 = parseInt(num3);
    let n4 = parseInt(num4);
    let n5 = parseInt(num5);


    let checkIfTheyAreNumber = n1 + n2 + n3 + n4 + n5;

    // Showing error message is they are not a number
    if (isNaN(checkIfTheyAreNumber)) {
        document.getElementById("error").innerHTML = `
        <p class="alert-error">Enter valid values, make sure all fields are filled with any number. EX. -2, 0, 8 ... </p>`
        document.getElementById("result").innerHTML = ""
    } else {

        let numberArray = [n1, n2, n3, n4, n5];

        let zeros = 0;
        let positives = 0;
        let negatives = 0;

        numberArray.forEach((item) => {
            if (item === 0) {
                zeros++
            } else if (item > 0) {
                positives++
            } else if (item < 0) {
                negatives++
            }
        })

        document.getElementById("result").innerHTML = `
        <p>
        <strong>
        Zeros: ${zeros}<br>
        Positives: ${positives}<br>
        negatives: ${negatives}<br>
        </strong>
        </p>`;
        document.getElementById("error").innerHTML = ""
    }

}

// Reseting all the values
const resetResult = () => {
    document.getElementById("result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
}