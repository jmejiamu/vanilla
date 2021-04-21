

const ABB = 0;
const STATE_NAME = 1
const STATE_CAPITAL = 2;
const STATE_POPULATION = 3

let states = [
    ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO'],
    ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado'],
    ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver'],
    ['4,903,185', '731,545', '7,278,717', '3,017,825', '39,512,223', '5,758,736']
]
const search = () => {
    let found = false;
    let input = document.getElementById("looking").value;


    for (let r = 0; r < states.length; r++) {
        for (let c = 0; c < 6; c++) {
            if (states[ABB][c].toLocaleLowerCase() === input.toLowerCase() || states[STATE_NAME][c].toLocaleLowerCase() === input.toLowerCase()) {
                document.getElementById('result').innerHTML = `
                <p>Thanks for your inquiry, here is the information you requested:</p>
               <p> State abbr = ${states[ABB][c]}</p>
               <p> State Name = ${states[STATE_NAME][c]}</p>
                <p>Capital = ${states[STATE_CAPITAL][c]}</p>
                <p>Population = ${states[STATE_POPULATION][c]}</p>
        `
                found = true
            }
        }

    }
    console.log(found);
    if (!found) {
        document.getElementById("result").innerHTML = ""
        document.getElementById("error").innerHTML = "The database does not have information about this state, we only have information about AL, AK, AZ, AR, CA, and CO"

    }
}

