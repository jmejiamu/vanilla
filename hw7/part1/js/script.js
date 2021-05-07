
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
    if (redChoose) {
        document.getElementById('p-one').className = "paraOne"
    } else {
        document.getElementById('p-one').className = ""

    }
}
