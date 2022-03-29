let maximum = parseInt(prompt("Enter the maximum number:"));

while (!maximum) {
    maximum = parseInt(prompt("Enter a valid maximum number:"));
}

// generating max random number
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your guess:"));
let attempt = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempt++;
    if (guess > targetNum) {
        guess = prompt("Too High! Enter a new guess:");
    }
    else {
        guess = prompt("Too Low! Enter a new guess:");
    }
}

if (guess === 'q') {
    console.log("You QUIT");
} else {
    console.log("YOu Won");
    console.log(`You won it, took you ${attempt} guesses`)
}
