// Validating the checkBox
const checkForm = () => {
    let optionOne = document.getElementById("option1").checked;
    let optionTwo = document.getElementById("option2").checked;
    let optionThree = document.getElementById("option3").checked;
    console.log(optionOne);

    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    if ((optionOne || optionThree || optionTwo) && (male || female || other)) {
        submitSuccess()
        document.getElementById("errorCareer").innerHTML = ""
        document.getElementById("error").innerHTML = ""
    } else {
        handleError();

    }
    // if (!male && !female && !other) {
    //     handleError();
    // } else {

    //     document.getElementById("error").innerHTML = ""
    // }

}

const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error">Choose an option</p> `;
    document.getElementById("errorCareer").innerHTML = `
    <p class="alert-error">Choose an option  check</p> `;
}

const submitSuccess = () => {
    document.getElementById("success").innerHTML = `
    <p class="alert-error">data submitted successful</p> `;
}