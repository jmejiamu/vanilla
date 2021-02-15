const itemInput = () => {
    let one = document.getElementById("item1").value;
    let two = document.getElementById("item2").value;
    let three = document.getElementById("item3").value;
    let four = document.getElementById("item4").value;

    let ione = parseInt(one);
    let itwo = parseInt(two);
    let ithree = parseInt(three);
    let ifour = parseInt(four);


    checkIsNotNumber(ione, itwo, ithree, ifour);
    // let test = document.getElementById("item-one").value = ione;
    // let test2 = document.getElementById("item-two").value = itwo;
    // document.getElementById("item-three").value = ithree;
    // document.getElementById("item-four").value = ifour;

    // console.log(test + test2);

}

const checkIsNotNumber = (one, two, three, four) => {
    let check = one + two + three + four;
    if (Number.isNaN(check)) {
        handleError();
    } else {
        let test = document.getElementById("item-one").value = one;
        let test2 = document.getElementById("item-two").value = two;
        document.getElementById("item-three").value = three;
        document.getElementById("item-four").value = four;
    }
}

const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error" >Enter valid values 0 - 100 and make sure all fields are filled with any number.</p>`;
    document.getElementById("result").value = ""

}