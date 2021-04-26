const submitTextAndSearch = () => {

    let countChar = 0;

    let userText = document.getElementById("enter-text").value;
    let userTextToLower = userText.toLowerCase();

    let charToSearch = document.getElementById("search-char").value;
    let charToSearchToLower = charToSearch.toLowerCase().charAt(0);

    console.log(">>>>", charToSearch.length);
    console.log(charToSearchToLower);

    if (userText.length === 0) {
        document.getElementById("error-text").innerHTML = "Error text";

    }

    if (charToSearch.length === 0) {
        document.getElementById("error-char").innerHTML = "Error char"
    } else {
        document.getElementById("error-text").innerHTML = "";
        document.getElementById("error-char").innerHTML = "";

        for (let i = 0; i < userTextToLower.length; i++) {

            if (userTextToLower.charAt(i) === charToSearchToLower) {
                countChar++;
            }

        }

        document.getElementById("search-result").innerHTML = `The letter ${charToSearch} was found ${countChar}`;


    }


    document.getElementById("original-text").innerHTML = userText;
}