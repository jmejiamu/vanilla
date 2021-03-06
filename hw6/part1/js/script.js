

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
    document.getElementById('result').innerHTML = "";
}

const cleanErrorDecimal = () => {
    document.getElementById('error-decimal').innerHTML = " ";

}

const clearData = () => {
    document.getElementById('error-decimal').innerHTML = "";
    document.getElementById('result').innerHTML = "";
    document.getElementById('enter-number').value = "";

}

const finalResult = (number) => {


    let tenthPosition = parseFloat(number).toFixed(1);
    let hundredthsPosition = parseFloat(number).toFixed(2);
    let thousandthsPosition = parseFloat(number).toFixed(3);
    document.getElementById('result').innerHTML = `
    
        Original Number: ${number}
        A) Nearest Integer: ${Math.round(number)}
        B) Square Root & round it to an int: ${parseInt(Math.sqrt(number))}
        C) Tenths Position: ${tenthPosition}
        D) Hundredths Position: ${hundredthsPosition}
        E) Thousandths Position: ${thousandthsPosition}
        
    `
    document.getElementById('enter-number').value = "";
}