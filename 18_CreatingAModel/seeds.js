const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO Connection Open");
    })

    .catch(err => {
        console.log('OGH NO WE GOT A MONGO ERRROR')
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby GrapeFruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save().then(data => {
//     console.log(data);
// })
//     .catch(err => {
//         console.log('error mate');
//         console.log(err);
//     })

const seedProducts = [{
    name: 'Fairy EggPlant',
    price: 10,
    category: 'vegetable'
},
{
    name: 'Water Melons',
    price: 5,
    category: 'fruit'
},
{
    name: 'Organic Mini Seedless Watermelon',
    price: 40,
    category: 'dairy'
},
{
    name: 'Organic Celery',
    price: 3.99,
    category: 'vegetable'
},
{
    name: 'Chocoloate Whole Milk',
    price: 8.50,
    category: 'dairy'
},
{
    name: 'tomato seeds',
    price: 1.87,
    category: 'vegetable'
}]

Product.insertMany(seedProducts)
    .then(data => {
        console.log("Insertted");
        console.log(data);
    })

    .catch(err => {
        console.log(err);
    })


