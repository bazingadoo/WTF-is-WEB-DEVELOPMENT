const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection Open");
    })

    .catch(err => {
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,                                                                               //name must be there
        maxlength: 20
    },

    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo']
    },

    onSale: {
        type: Boolean,
        default: false
    },

    categories: [String],     // {type : [String], default: ['cycling']}

    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },

    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Cycling Jersey', price: 90.50, categories: ['cycling', 'safety'], size: 'S' })
bike.save()
    .then(data => {
        console.log("Insertted");
        console.log(data);
    })

    .catch(err => {
        // console.log(err.errors.name.properties.message);
        console.log(err);
    })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 100.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("Insertted");
//         console.log(data);
//     })

//     .catch(err => {
//         // console.log(err.errors.name.properties.message);
//         console.log(err);
//     })









