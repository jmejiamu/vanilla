

const submitNumber = () => {

    const number = document.getElementById('enter-number').value;
    // const convertNumber = parseFloat(number);

    const checkDecimal = number.split(".");

    // console.log(number[1].length);

    if (checkDecimal[1] === undefined || checkDecimal[1].length < 4) {
        errorHandle();
    } else {
        cleanErrorDecimal()
        finalResult(number);
    }

    // console.log(Number.isInteger(number));

    // if (number.length - (number.indexOf(".") + 1) < DECIMAL) {
    //     errorHandle();
    // } else {
    //     cleanErrorDecimal()
    //     document.getElementById("result").innerHTML = number;
    // }

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