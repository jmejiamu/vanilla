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

}

const checkIsNotNumber = (one, two, three, four) => {

    let check = one + two + three + four;

    if (Number.isNaN(check)) {
        handleError();
    } else {
        numberSold(one, two, three, four);
        cleanError();
    }
}

const numberSold = (item1, item2, item3, itemt4) => {

    let one = document.getElementById("item-one").value = item1;
    let two = document.getElementById("item-two").value = item2;
    let three = document.getElementById("item-three").value = item3;
    let four = document.getElementById("item-four").value = itemt4;

    total(one, two, three, four);
}

const total = (item1, item2, item3, item4) => {

    document.getElementById("item-one-result").value = item1 * 20.99;
    document.getElementById("item-two-result").value = item2 * 12.75;
    document.getElementById("item-three-result").value = item3 * 9.95;
    document.getElementById("item-four-result").value = item4 * 35.89;

}

const handleError = () => {
    document.getElementById("error").innerHTML = `
    <p class="alert-error" >Enter valid numeric value and fill all the inputs.</p>`;
    document.getElementById("item-one").value = "";
    document.getElementById("item-two").value = "";
    document.getElementById("item-three").value = "";
    document.getElementById("item-four").value = "";
}

const cleanError = () => {
    document.getElementById("error").innerHTML = "";

}