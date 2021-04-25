

const submitNumber = () => {

  const DECIMAL = 4;

  const number = document.getElementById('enter-number').value;
  // const convertNumber = parseFloat(number) * 1.0;

  if (number.length - (number.indexOf(".") + 1) < DECIMAL || Number.isInteger(number)) {
    console.log("Please Enter a number with at least 4 decimal position");
  }


  // document.getElementById('result').innerHTML = convertNumber;

}
