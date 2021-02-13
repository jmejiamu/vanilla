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

    // getting total average score
    let finalAverage = (.5 * hwAvg) + (.2 * midExam) + (.2 * finalExam) + (.1 * p);

    if (Number.isNaN(finalAverage)) {
        document.getElementById("error").innerHTML = `
        <p class="alert-error" >Enter valid values, make sure all fields are filled with any number.</p>`
    }

}