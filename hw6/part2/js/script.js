const submitTextAndSearch = () => {

    let countChar = 0;

    let userText = document.getElementById("enter-text").value;
    let userTextToLower = userText.toLowerCase();

    let charToSearch = document.getElementById("search-char").value;
    let charToSearchToLower = charToSearch.toLowerCase().charAt(0);

    if (userText.length === 0) {
        document.getElementById("error-text").innerHTML = "This cannot be empty";
        document.getElementById("search-result").innerHTML = "";
    } else {

        if (charToSearch.length === 0) {
            document.getElementById("error-text").innerHTML = "";
            document.getElementById("error-char").innerHTML = "This cannot be empty"
            document.getElementById("search-result").innerHTML = ""
        } else {
            document.getElementById("error-text").innerHTML = "";
            document.getElementById("error-char").innerHTML = "";

            for (let i = 0; i < userTextToLower.length; i++) {

                if (userTextToLower.charAt(i) === charToSearchToLower) {
                    countChar++;
                }
            }

            document.getElementById("search-result").innerHTML = `The letter <strong>${charToSearch}</strong> was found ${countChar} times`;
            document.getElementById("original-text").innerHTML = userText;
        }
    }

}


const clearData = () => {
    document.getElementById("error-text").innerHTML = "";
    document.getElementById("error-char").innerHTML = "";
    document.getElementById("search-result").innerHTML = "";
    document.getElementById("enter-text").value = "";
    document.getElementById("search-char").value = "";
}