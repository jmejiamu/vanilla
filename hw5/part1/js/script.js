// Validating the checkBox
const checkForm = () => {
    let optionOne = document.getElementById("option1").checked;
    let optionTwo = document.getElementById("option2").checked;
    let optionThree = document.getElementById("option3").checked;

    let male = document.getElementById("male").checked;
    let female = document.getElementById("female").checked;
    let other = document.getElementById("other").checked;

    if (!optionOne && !optionThree && !optionTwo) {
        alert("Chose one of the option")
    }

    if (!male && !female && !other) {
        alert("chose one option RRRRR")
    }
}