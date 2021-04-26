// Formating phone number
$('input[name="phone-number"]').mask('(000) 000-0000');

const submitData = () => {
    const phoneNumber = document.getElementById('phone').value;

    let areCode = phoneNumber.split(")");
    let tokenAreaCode = areCode[0].split('(');

    let threeDigit = phoneNumber.split("-");
    let tokenThreeDigit = threeDigit[0].split(")");

    let fourDigit = phoneNumber.split("-");

    document.getElementById("area-code").value = `${tokenAreaCode[1]}`;
    document.getElementById("three-code").value = `${tokenThreeDigit[1]}`;
    document.getElementById("four-code").value = `${fourDigit[1]}`;

}

const clearData = () => {
    document.getElementById('phone').value = ``;
    document.getElementById("area-code").value = ``;
    document.getElementById("three-code").value = ``;
    document.getElementById("four-code").value = ``;

}