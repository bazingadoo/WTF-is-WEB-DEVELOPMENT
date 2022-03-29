// function grumpus() {
//     console.log('ugh...Zanaida is a whore');
//     console.log('How come no body talking about this trade?');
//     console.log('This is howw i learn javascript');
// }

// grumous();


//passing arguments into func

// function mathRandom(number) {
//     console.log(`${Math.floor(Math.random() * number) + 1}`);
// }

// mathRandom(10);

// function greeting(person) {
//     console.log(`Hey, ${person}`);
// }
// greeting('Zenaida');



//multiple arguments
// function greet(firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`);
// }

// greet('akshay', 'kumar');


//repeating stuffs

// function repeat(str, numbs) {
//     for (i = 0; i < numbs; i++) {
//         console.log("Hi");
//     }
// }

// repeat('tims', 5); //prints hi 5 times


//repeating and cancatinating strings

// function repeat(str, nums) {
//     let result = "";
//     for (let i = 0; i < nums; i++) {
//         result += str;
//     }
//     console.log(result);
// }
// repeat('hello', 5);


//Multiple args exercise 

// function isCoolSnake(a, b) {
//     let result = '';
//     if (a === 1 && b === 1) {
//         result += 'Snake eyes';
//         console.log(result);
//     } else {
//         console.log('Not snake eyes');
//     }
// }

// isCoolSnake(1, 1);


//capturing values using 'return' keyword 

// function add(a, b) {
//     let sum = a + b;
//     return sum;
// }

// const sumUp = add(10, 11);
// console.log(sumUp);

//another example
// function add(x, y) {
//     if (typeof x !== 'number' || typeof y != 'number') {
//         return false;
//     }
//     return x + y;
// }

// let sum = add(add(5, 6), 9);
// console.log(sum);

//last_Element Arrays

// function lastElement(array) {
//     if (array.length === 0) {
//         return null;
//     }
//     else {
//         return array[array.length - 1];
//     }
// }


// captialize exercise
// Strings are immutable objects

// function capitalize(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// const pop = capitalize('exercise');
// console.log(pop);


//Sum Array Exercise

// function sumArray(arr) {
//     let total = 0;
//     for (i = 0; i < arr.length; i++) {
//         total += arr[i];
//     }
//     return total;
// }

// let corp = sumArray([1, 12, 3]);
// console.log(corp);


//DaysOfTheWeek(with object)

// const days = {
//     1: 'Monday',
//     2: "Tuesday",
//     3: "Wednesday",
//     4: "Thursday",
//     5: "Friday",
//     6: "Saturday",
//     7: "Sunday"
// }

// function returnDays(number) {
//     if (number < 1 || number > 7) {
//         return null;
//     }
//     return (days[number]);
// }

// let gorp = returnDays(3);
// console.log(gorp);


//with array 

function returnDays(number) {
    const days = [null, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (number < 1 || number > 7) {
        return days[0];
    }
    return (days[number]);
}

let gorp = returnDays(3);
console.log(gorp);






