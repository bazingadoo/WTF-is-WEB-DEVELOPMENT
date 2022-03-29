
//scope global and local
// let totalEggs = 78;
// function collectEggs() {
//     totalEggs = 697;
// console.log(totalEggs);
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);


// Lexical Scope

// function bankRobbery() {                                    //parent Function
//     const heroes = ['Spiderman', 'Batman', 'rawwr'];
//     function callHeros() {                                 //Child functions
//         function inner() {
//             for (let hero of heroes) {
//                 console.log(`Help Us ! ${hero}`);
//             }
//         }
//         inner();                                            //sub-child
//     }
//     callHeros();
// }

// bankRobbery();



//****************function Expressions****************************
// function add(x, y) {
//     return x + y;
// }

/**Other way of defing a function using variable **/
// const add = function (x, y) {
//     return x + y;
// }
// console.log(add(6, 7));


// let greet = function () { console.log('Hi') };
// greet()


//********Higher order functions***********
/* FUNCTIONS AS AN ARGUMENTS */

// function callTwice(func) {
//     func();                          //invoke the function
//     func();
// }

// function square(f) {
//     for (i = 0; i < 10; i++) {
//         f();                         //invoking the func
//     }
// }

// function numberGenerator() {
//     const nums = Math.floor(Math.random() * 10) + 1;
//     console.log(nums);
// }

// callTwice(numberGenerator);     //passing function as an argument
// square(numberGenerator);       //passing function as an argument


/*Returning function*/

// function makeMysteryBox() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log('this is a good function');
//             console.log('this is a good function');
//             console.log('this is a good function');
//             console.log('this is a good function');
//         }
//     }
//     else {
//         return function () {
//             alert('You have been hacked');
//             alert("Don't try to close this window");
//             alert("Don't try to close this window");
//             alert("Don't try to close this window");
//             alert("Don't try to close this window");
//             alert("Don't try to close this window");
//         }
//     }
// }

// const capture = makeMysteryBox();
// capture();


/* Underlying concept */
// makeFunction(50, 100);

// function isBetween(num) {
//     return num >= 50 && num <= 100;
// }

/*  **************   */
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(1, 18);
console.log(isChild(5));

const isAdult = makeBetweenFunc(19, 34);
const isSenior = makeBetweenFunc(35, 65);

console.log(isAdult(23));
console.log(isSenior(56));




