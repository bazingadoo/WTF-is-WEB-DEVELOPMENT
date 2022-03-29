// Spread syntax (...)

const array = [4, 6, 7, 89, 35];
console.log(Math.max(array)); //NaN

console.log(Math.max(...array)); //89
console.log(...array); //4 6 7 89 35 (with a space)

console.log("hello");

console.log(..."hello"); //h e l l o

/*   Expressions - Spread syntax in function calls  */
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [5, 6, 7];
console.log(sum(...numbers)); //created a sum function

/* Spread WITH ARRAY LITERALS */

const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["hello", "there", "cat", "dog"];

// const arr3 = arr1.concat(arr2); //or
const arr4 = [...arr1, ...arr2];
console.log(arr4); //[1, 2, 3, 4, 5, 'hello', 'there', 'cat', 'dog']

arr4.push("tommy");

/* Spread with object Literals */
let obj1 = { foo: "bar", x: 42 };
let obj2 = { foo: "baz", y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 } since baz overwrites bar

let mergedObj1 = { ...obj1, ...obj2, foo: "rawwr" };
//rawwr wins and overwrites baz, output {foo: 'rawwr, x: 42, y: 13}

let indexOfArray = { ...["rawwr", "sinny", "gopal", "nehal"] };
//output- {0: 'rawwr', 1: 'sinny', 2: 'gopal', 3: 'nehal'}

let indexOfStrings = { ..."rawwr" };
//output- {0: 'r', 1: 'a', 2: 'w', 3: 'w', 4: 'r'}
