//********If-Statement*******//
// console.log("Before Conditional");

// let random = Math.random();

// if (random < 0.5) {
//     console.log("Your Number is less than 0.5");
//     console.log(random);
// }

// if (random >= 0.5) {
//     console.log("Greater than 0.5");
//     console.log(random);
// }
// console.log("After conditional");


//****** else-if *********//
// const days = 28;

// if (days === 30) {
//     console.log("Hey I am 30!!!");
// }

// else if (days === 31) {
//     console.log("STUPID YOU");
// }

// else if (days === 28) {
//     console.log("STUPID YOU FEB");
// }

// const age = 98;

// if (age <= 5) {
//     console.log("Baby");
// }

// else if (age > 5 && age <= 10) { 
//     console.log("Child");
// }

// else if (age > 10 && age <= 65) {
//     console.log("Adult");
// }

// else if (age > 65 && age <= 100) {
//     console.log("Oldies");
// }


// *****ELSE******

// const days = parseInt(prompt("Enter the Number Of days"));

// if (days === 30) {
//     console.log("This month will have the 30 days");
// }

// else if (days === 31) {
//     console.log("This month wil have 31 days");
// }

// else if (days === 28) {
//     console.log("STUPID YOU FEB");
// }

// else {
//     console.log("NOTHING MATCHES");
// }


//***NESTING****

const password = prompt("Enter your password");
// PassWord must be 6+ characcters
if (password.length >= 6) {
    // PassWord cannot include spaces
    //"hello".indexOf(' ') will yeild -1 because it has no space
    if (password.indexOf(' ') !== -1) {
        console.log("PassWord cannot include spaces");
    }
    else {
        console.log("PassWord is valid");
    }
}

else {
    console.log("Password Too short");
}








