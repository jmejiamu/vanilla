
const bckColor = () => {
    let dropDownColor = document.getElementById('back-color');

    if (dropDownColor.selectedIndex === 1) {
        document.getElementById('style-bck').className = "body-style"
    } else {
        document.getElementById('style-bck').className = ""
    }
}

const fontColor = () => {

    let redChoose = document.getElementById('option1').checked;
    let greeChoose = document.getElementById('option2').checked;
    let blueChoose = document.getElementById('option3').checked;

    if (redChoose) {
        document.getElementById('p-one').className = "para-one"
    } else {
        document.getElementById('p-one').className = ""
    }

    if (greeChoose) {
        document.getElementById('p-two').className = "para-two"
    } else {
        document.getElementById('p-two').className = ""

    }

    if (blueChoose) {
        document.getElementById('p-three').className = "para-three"
    } else {
        document.getElementById('p-three').className = ""

    }

}

const titleStyles = () => {
    let largeChoose = document.getElementById('large').checked;
    if (largeChoose) {
        document.getElementById('title').className = "font-ti"
    } else {
        document.getElementById('title').className = ""

    }

}
