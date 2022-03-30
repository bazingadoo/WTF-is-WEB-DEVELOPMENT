const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/movieApp');
    console.log('connection opened');
}


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' });


//amadeus.save() to save in mongoDb database

// Movie.insertMany([
//     { title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' },
//     { title: 'Alien', year: 1999, score: 8.1, rating: 'R' },
//     { title: 'Assassian', year: 1978, score: 9.4, rating: 'PG' },
//     { title: 'Stand By Me', year: 1980, score: 7.5, rating: 'R' },
//     { title: 'Moonrise', year: 1956, score: 4.5, rating: 'PG_13' }
// ])

//     .then(data => {
//         console.log("Insertted");
//         console.log(data);
//     })

//     .catch(err => {
//         console.log(err);
//     })


//find in mongoose
//Movie.find({}).then(data=> console.log(data));
//Movie.find({title:'Moonrise}).then(data=> console.log(data));
//Movie.findById(id).then(data=> console.log(data));

//update in mongoose
//Movie.update({title:'Amadeus'}, {year:1984}).then(data=> console.log(data));Movie.update({title:'Amadeus'}, {year:1984}).then(data=> console.log(data));
//Movie.updateMany({title: {$in:['Amadeus', 'Alien']}}, {score: 10).then(data=> console.log(data));

//findOneandUpdate

// Movie.findOneAndUpdate({ title: 'Amadeus' }, { score: 6 }, { new: true }).then(data => console.log(data));

//remove
// Movie.deleteMany({ title: 'Amadeus' }).then(data => console.log(data));

//findOneandDelete(to get the deleted idea)
// Movie.findOneAndDelete({ title: 'Amadeus' }).then(data => console.log(data));
