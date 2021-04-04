// Validating the checkBox
const checkForm = () => {
    let optionOne = document.getElementById("option1").checked;
    let optionTwo = document.getElementById("option2").checked;
    let optionThree = document.getElementById("option3").checked;

    if (!optionOne && !optionThree && !optionTwo) {
        alert("Chose one of the option")
    }
}