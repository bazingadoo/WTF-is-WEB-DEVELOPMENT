//for in is used to iterate through the objects only

const testscore = {
    karnan: 56,
    rahul: 78,
    shawm: 80,
    king: 56,
    tyre: 78,
    rudo: 79,
    deasrer: 80,
}


// for (let peep in testscore) {
//     console.log(`${peep} scored ${testscore[peep]}`);
// }

// Object.values(testscore) is an array
// for (let value of Object.values(testscore)) {
//     console.log(value);
// }


//  Object.keys(testscore) is an array
// for (let key of Object.keys(testscore)) {
//     console.log(key);
// }

// Object.entries(testscore) is an array
// for (let entry of Object.entries(testscore)) {
//     console.log(entry);
// }


//summing up the values and averaging
let total = 0;
let values = Object.values(testscore);
for (let value of values) {
    total += value
    console.log(value);
}
console.log('average ' + total / values.length);