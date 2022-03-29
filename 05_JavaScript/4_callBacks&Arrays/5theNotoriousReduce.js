//reduce executes a reducer function on each element of the array, and returns
//resulting in a single value   
//reduce(accumulator, price)
const prices = [1.34, 54, 22, 78.54, 13.44, 67, 54.8, 1];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }

// console.log(total);

const total = prices.reduce((total, price) => total + price);
console.log(total);

//finding smallest element in an array using reduce
const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
});

console.log(minPrice);


//reduce and object 

const movies = [
    {
        title: 'Shershah',
        score: 89,
        year: 2021
    },
    {
        title: 'Pushpa',
        score: 71,
        year: 2021
    },
    {
        title: 'Alien',
        score: 91,
        year: 1889
    },
    {
        title: 'starwars',
        score: 71,
        year: 1889
    },
    {
        title: 'Bulma',
        score: 81,
        year: 1880
    },
    {
        title: 'Alayu',
        score: 97,
        year: 1889
    }
]

const highestRated = movies.reduce((bestMovie, currentMovie) => {
    if (currentMovie.score > bestMovie.score) {
        return currentMovie;
    }

    return bestMovie;
});

console.log(highestRated);

//passing the intial function in a reduce
const even = [2, 4, 6, 8, 10];

const add = even.reduce((sum, value) => sum + value, 100);
console.log(add);    //130, 100 gets added

