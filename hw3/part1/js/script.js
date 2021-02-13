const studentGrades = () => {

    // Getting user inputs
    let homework = document.getElementById("hw-score").value;
    let midTerm = document.getElementById("mt-score").value;
    let final = document.getElementById("fn-score").value;
    let participation = document.getElementById("p-score").value;

    // Parsing string values to int
    let hwAvg = parseInt(homework);
    let midExam = parseInt(midTerm);
    let finalExam = parseInt(final);
    let p = parseInt(participation);

    // Checking if the users' input is 0 - 100
    if ((hwAvg <= 100 && hwAvg >= 0) && (midTerm <= 100 && midTerm >= 0) && (finalExam <= 100 && finalExam >= 0) && (p <= 100 && p >= 0)) {

        // getting total average score
        let finalAverage = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * p);

        average(finalAverage)

    } else {
        handleError();
    }

}

// This function handle the total average grades ex. 90 - 100 A   
const average = (total) => {
    if (Number.isNaN(total)) {
        handleError();
    } else {

        document.getElementById("result").innerHTML = `
        <p>
        <strong>
        Average Grade: ${parseInt(total)}<br>
        </p>`;
        document.getElementById("error").innerHTML = ""
    }
}

const handleError = () => {
    document.getElementById("error").innerHTML = `
        <p class="alert-error" >Enter valid values 0 -100 and make sure all fields are filled with any number.</p>`
    document.getElementById("result").innerHTML = ""

}

const resetResult = () => {
    document.getElementById("result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
}