//DEFAULT PARAMETERS(PARAMS)

//OLD WAY   
// function rollDie(numSides) {
//if rollDie() is undefined, it will generate random number between 1 and 6
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// }


//New WAY 
// function rollDie(numSides = 6) {
//     return Math.floor(Math.random() * numSides) + 1;
// }

// console.log(rollDie());    //default para = 6


//another example 
const greet = (person, msg = 'Hey there', punc = '!!!!') =>
    `${msg}, ${person}${punc}`;

console.log(greet('Akshay'));
console.log(greet('Akshay', 'Wowww', '........'));







