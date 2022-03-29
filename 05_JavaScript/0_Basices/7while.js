// let count = 0;

// while (count < 10) {
//     count++;
//     console.log(count);
// }



//Secret Code 

// const SECRET = "akshay";

// let guess = prompt("Enter secret code:");

// while (guess !== SECRET) {
//     guess = prompt("Enter secret code:");
// }

// console.log("Congrats You GOt THE CODE");


//break statement

let input = prompt("Say My Name");

while (true) {
    input = prompt(input);                      //saving the input and giving the inputs back
    if (input.toLowerCase() === "akshay kumar")
        break;

}
console.log("That's correct");