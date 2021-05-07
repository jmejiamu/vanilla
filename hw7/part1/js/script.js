
const bckColor = () => {
    let dropDownColor = document.getElementById('back-color');

    if (dropDownColor.selectedIndex === 1) {
        document.getElementById('style-bck').className = "body-style"

    } else {
        document.getElementById('style-bck').className = ""

    }
}