const jokes = require('give-me-a-joke');
// console.dir(jokes);
const colors = require('colors');


//for global install, npm i -g [name of the package]
//npm link cowsay because cowsay is globally installed
const cowsay = require('cowsay');
console.log('OMG Rainbows!'.rainbow); // rainbow
// To get a random dad joke
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});