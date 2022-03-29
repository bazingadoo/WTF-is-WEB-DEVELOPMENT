// The forEach() method executes a provided function once for each array element.

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function func(element) {
//     console.log(element);
// }

// numbers.forEach(func);   //runs the function once for each array element


//passing  the function anonymously
// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el);             //even
//     }
// });

/* Another Example */

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

// movies.forEach(function (movie) {
//     console.log(`${movie.title} - ${movie.score} / 100`);
// })


//MAP - creates a new arrauy with the results of calling a callback on every element in the array the array

// const texts = ['akshay', 'sonam', 'anushka', 'virat'];
// const caps = texts.map(function (func) {   //creating a new map and saving it in a variable
//     return func.toUpperCase();
// })                      

// console.log(caps);
// console.log(texts);

const titles = movies.map(function (movie) {
    return movie.title.toUpperCase();
})
console.log(titles);

