const celciusToFarenheit = () => {
    let userInput = document.getElementById("user-input").value;

    let input = parseInt(userInput)

    if (Number.isNaN(input)) {
        handleError();
    } else {

        let conversion = (9 / 5 * userInput) + 32;

        document.getElementById("conversion").value = (`${userInput}C is ${parseInt(conversion)}F`);
        document.getElementById("error").innerHTML = ""
    }

}

const farenheitToCelcius = () => {
    let userInput = document.getElementById("user-input").value;

    let input = parseInt(userInput)

    if (Number.isNaN(input)) {
        handleError();
    } else {

        let conversion = 5 / 9 * (userInput - 32);

        document.getElementById("conversion").value = `${userInput}F is ${parseInt(conversion)}C`;
        document.getElementById("error").innerHTML = ""
    }
}


const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error" >Enter valid values 0 - 100 and make sure all fields are filled with any number.</p>`;
    document.getElementById("conversion").value = ""
}
