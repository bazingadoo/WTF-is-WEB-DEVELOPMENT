//filter creates a new array with all elements that pass
//  the test implemented by the provided function


// const number = [3, 5, 6, 7, 3];
// const odds = number.filter(func => func % 2 === 1);
// console.log(odds);



// const movies = [
//     {
//         title: 'Shershah',
//         score: 89,
//         year: 2021
//     },
//     {
//         title: 'Pushpa',
//         score: 71,
//         year: 2021
//     },
//     {
//         title: 'Alien',
//         score: 91,
//         year: 1889
//     },
//     {
//         title: 'starwars',
//         score: 71,
//         year: 1889
//     },
//     {
//         title: 'Bulma',
//         score: 81,
//         year: 1880
//     },
//     {
//         title: 'Alayu',
//         score: 97,
//         year: 1889
//     }
// ]

// console.log(movies);
// const goodMovies = movies.filter(movie => movie.score > 90);
// const goodTitles = movies.filter(movie => movie.score > 90).map(movie => movie.title)
// console.log(goodMovies);
// console.log(goodTitles);  //after chaining with map

// const badMovies = movies.filter(movie => movie.score < 90);
// console.log(badMovies);

// const recentMovies = movies.filter(movie => movie.year > 2000);
// const recentTitles = recentMovies.map(movie => movie.title);      //getting the title using map

// console.log(recentMovies);
// console.log(recentTitles);

//other example
const validUserNames = arr => {
    const err = arr.filter(name => {
        return name.length < 10;
    });
    return err;                      //return captures the function
}

//in simpler form

// const validUserNames = arr => arr.filter(name => name.length < 10);
console.log(validUserNames(['mark', 'staceymom1978', 'carrie456', 'nadia789']));

//EVERY AND SOME
//every tests all elements of in the array pass the provided function.
//it returns a boolean value

const words = ['dog', 'cag', 'sig', 'plg', 'wog', 'dig', 'bag'];
words.every(word => word.length === 3);                 //true
words.every(word => word[0] === 'd');                   //false
words.every(word => word[word.length - 1] === 'g');   //true


//some returns true if any of the array elements pass the test function
words.some(word => word.length === 3);                 //true
words.some(word => word[0] === 'd');                   //true
words.some(word => word[word.length - 1] === 'g');   //true

