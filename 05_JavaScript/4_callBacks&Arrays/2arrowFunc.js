// const add = function (a, b) {
//     return a + b;
// }

//arrow function (same and more compact)
// const add = (a, b) => {
//     return a + b;
// }
// console.log(add(1, 2));

//arrow functions with no arguments
// const rollDie = () => {
//     return (Math.random());
// }
// console.log(rollDie());

//arrow function with one parameter
// const square = x => {
//     return x * x;
// }
// console.log(square(5));

//arrow function with implicit returns
//implicit returns only work in situation where there is only one value, just a
//single expression is evaluated and returned
// const add = (a, b) => a + b;
// const rollDie = () => Math.random();
// const square = x => x * x;


//wraping up arrow functions with map 
//1
const fullNames = [{ first: 'Albus', last: 'Dumbledore' }, { first: 'Harry', last: 'Potter' }, { first: 'Hermione', last: 'Granger' }, { first: 'Ron', last: 'Weasley' }, { first: 'Rubeus', last: 'Hagrid' }, { first: 'Minerva', last: 'McGonagall' }, { first: 'Severus', last: 'Snape' }];
const firstName = fullNames.map(name => name.first);
console.log(firstName);

//2 example
const movies = [
    {
        title: 'Shershah',
        score: 89
    },
    {
        title: 'Pushpa',
        score: 71
    },
    {
        title: 'Alien',
        score: 91
    }
]

// const scores = movies.map(function (movie) {
//     return `${movie.title} - ${movie.score} / 100`;
// });
// console.log(scores);

//using arrfunctions
const scores = movies.map((movie) => `${movie.title} - ${movie.score} / 100`);
console.log(scores);



//ARROW FUNCTIONS AND THIS keyword behaves differently          
const person = {
    firstName: 'Akshay',
    lastName: 'Kumar',
    fullName: function () {
        // console.log(this);
        return `${this.firstName} ${this.lastName}`;
    },
    shoutName: function () {
        setTimeout(() => {
            //this in arrow functions is the same value of the keyboard, this in the scope of the function is created         
            console.log(this);
            console.log(this.fullName());
        }, 3000)
    }
}
console.log(person.shoutName());    //undefined because this - refers to window object in arrow functions and we can't directly call it 



