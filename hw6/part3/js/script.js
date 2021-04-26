// Formating phone number
$('input[name="phone-number"]').mask('(000) 000-0000');

const submitData = () => {
    const phoneNumber = document.getElementById('phone').value;

    let areCode = phoneNumber.split(")");
    let tokenAreaCode = areCode[0].split('(');

    let threeDigit = phoneNumber.split("-");
    let tokenThreeDigit = threeDigit[0].split(")");

    let fourDigit = phoneNumber.split("-");
    console.log(fourDigit);

    document.getElementById("area-code").value = `${tokenAreaCode[1]}`;
    document.getElementById("three-code").value = `${tokenThreeDigit[1]}`;
    document.getElementById("four-code").value = `${fourDigit[1]}`;




}