// Formating phone number
$('input[name="phone-number"]').mask('(000) 000-0000');

const submitData = () => {
    const phoneNumber = document.getElementById('phone').value;

    let areCode = phoneNumber.split(")");
    let tokenAreaCode = areCode[0].split('(')

    console.log(typeof token);

    document.getElementById("area-code").value = `${tokenAreaCode[1]}`;

    // console.log("Area code", tokenAreaCode[1]);


}