
const onClickEventHandler = () => {
    let dropDown = document.getElementById('destination').value;

    if (dropDown !== "none") {
        window.open(dropDown);
        success()
    } else {
        handleError();
    }

}


const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error">Select an option </p> `;

}

const success = () => {
    document.getElementById("error").innerHTML = "";
}