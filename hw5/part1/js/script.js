// Validating the checkBox
const checkForm = () => {


    let userInput = document.getElementById("user-name").value;
    // Check box
    let optionOne = document.getElementById("option1").checked;
    let optionTwo = document.getElementById("option2").checked;
    let optionThree = document.getElementById("option3").checked;

    // Radios
    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    console.log(male);

    let dropDown = document.getElementById("years");
    console.log(dropDown.selectedIndex);

    if ((optionOne || optionThree || optionTwo)
        && (male || female || other)
        && (dropDown.selectedIndex !== 0) && (userInput !== "")) {
        submitSuccess()
    } else {
        handleError();

    }


}


const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error">Complete all the  fields</p> `;
    document.getElementById("success").innerHTML = "";

}

const submitSuccess = () => {
    document.getElementById("success").innerHTML = `
    <p class="su">Data submitted successfully </p> `;

    //Clean errors
    document.getElementById("error").innerHTML = ""


    //Input
    document.getElementById("user-name").value = "";

    // radio
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("other").checked = false;

    // Check box
    document.getElementById("option1").checked = false;
    document.getElementById("option2").checked = false;
    document.getElementById("option3").checked = false;

    document.getElementById("years").selectedIndex = 0;
}