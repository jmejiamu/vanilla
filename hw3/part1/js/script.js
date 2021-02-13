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

        averageTotal(finalAverage)

    } else {
        handleError();
    }

}

// This function handle the total average grades ex. 90 - 100 A   
const averageTotal = (total) => {
    if (Number.isNaN(total)) {
        handleError();
    } else {
        let rountTotal = Math.round(total);

        if (rountTotal >= 90) {

            handleGrades(rountTotal, "A");

        } else if (rountTotal >= 80 && rountTotal <= 89) {

            handleGrades(rountTotal, "B")

        } else if (rountTotal >= 70 && rountTotal <= 79) {

            handleGrades(rountTotal, "C")
        } else if (rountTotal >= 60 && rountTotal <= 69) {

            handleGradesDandF(rountTotal, "D")

        } else if (rountTotal <= 59) {
            handleGradesDandF(rountTotal, "F")

        } else {
            console.log("error");
        }
    }
}

const handleGrades = (total, letter) => {
    document.getElementById("result").innerHTML = `
    <p>
    <strong>
    Student Final Average: ${total} ${letter} <br>
    </strong>
    </p>`;
    document.getElementById("error").innerHTML = ""

}

const handleGradesDandF = (total, letter) => {
    document.getElementById("result").innerHTML = `
    <p class="grades-d-f">
    <strong>
    Student Final Average: ${total} ${letter} <br>
    Student must retake the course
    </strong>
    </p>`;
    document.getElementById("error").innerHTML = ""

}

const handleError = () => {
    document.getElementById("error").innerHTML = `
        <p class="alert-error" >Enter valid values 0 - 100 and make sure all fields are filled with any number.</p>`
    document.getElementById("result").innerHTML = ""

}

const resetResult = () => {
    document.getElementById("result").innerHTML = ""
    document.getElementById("error").innerHTML = ""
}