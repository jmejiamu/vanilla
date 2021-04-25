

const submitNumber = () => {

    const number = document.getElementById('enter-number').value;

    const checkDecimal = number.split(".");


    if (checkDecimal[1] === undefined || checkDecimal[1].length < 4) {
        errorHandle();
    } else {
        cleanErrorDecimal()
        finalResult(number);
    }



}

const errorHandle = () => {
    document.getElementById('error-decimal').innerHTML = "Please Enter a number with at least 4 decimal position";
}

const cleanErrorDecimal = () => {
    document.getElementById('error-decimal').innerHTML = " ";

}

const finalResult = (number) => {
    console.log(number);
    let tenthPosition = parseFloat(number).toFixed(1);
    document.getElementById('result').innerHTML = `
        A) Nearest Integer: ${Math.round(number)}
        B) Square Root & round it to an int: ${parseInt(Math.sqrt(number))}
        C) Tenths Position: ${tenthPosition}
    `

}