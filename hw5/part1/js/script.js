// Validating the checkBox
const checkForm = () => {
    // Check box
    let optionOne = document.getElementById("option1").checked;
    let optionTwo = document.getElementById("option2").checked;
    let optionThree = document.getElementById("option3").checked;

    // Radios
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    let dropDown = document.getElementById("years");

    if ((optionOne || optionThree || optionTwo)
        && (male || female || other) && (dropDown !== 0)) {
        submitSuccess()
        document.getElementById("errorCareer").innerHTML = ""
        document.getElementById("error").innerHTML = ""
        document.getElementById("errorDrop").innerHTML = ""
    } else {
        handleError();

    }


}

const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error">Choose an option</p> `;
    document.getElementById("errorCareer").innerHTML = `
    <p class="alert-error">Choose an option  check</p> `;
    document.getElementById("errorDrop").innerHTML = `
    <p class="alert-error">Choose an option  errorDrop</p> `;
}

const submitSuccess = () => {
    document.getElementById("success").innerHTML = `
    <p class="alert-error">data submitted successful</p> `;
}