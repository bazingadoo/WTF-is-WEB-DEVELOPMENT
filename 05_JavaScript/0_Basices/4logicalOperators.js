//&& operator

// const password = prompt('Enter your password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log("Valid PassWord");
// } else {
//     console.log("Invalid Password");
// }

// const mystery = 'pysteryy7';

// if (mystery.length > 5 && mystery[0] === 'p' && mystery.indexOf('7') !== -1) {
//     console.log("You got it");
// }


//or-operator

// 0-5 free
// 6-10 $10
//11-20 $20
//21-64 $10
//65-above free
// const age = parseInt(prompt("Enter your age:"));

// if ((age >= 0 && age <= 5) || (age >= 65)) {
//     console.log("You will get cookies for free");
// }

// else if ((age > 5 && age <= 10) || (age > 20 && age < 65)) {
//     console.log("You will get cookies for $10");
// }

// else if (age > 10 && age <= 20) {
//     console.log("You will get cookies for $20");
// }

// else {
//     console.log("Please Enter A Positive Value");
// }


//Not-Operators !
// !null //true
// !(0 === 0) //false

// let userName = prompt("Enter Your Name");

// if (!userName) {
//     userName = alert("Please Enter Your Name");
// }


// Switch-case 

const number = parseInt(prompt("Enter Number"));

switch (number) {
    case 1:
        console.log("you clicked 1");
        break;
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("you clicked either 2, 3, 4 or 5");
        break;

    default:
        number = alert("Ranges are just between 1 & 5. Try again");

}