const celciusToFarenheit = () => {
    let userInput = document.getElementById("user-input").value;

    let conversion = (9 / 5 * userInput) + 32;

    document.getElementById("conversion").value = conversion;
}

const farenheitToCelcius = () => {
    let userInput = document.getElementById("user-input").value;

    let conversion = 5 / 9 * (userInput - 32);

    document.getElementById("conversion").value = conversion;
}
