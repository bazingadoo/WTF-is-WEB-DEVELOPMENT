
//Virtuals are document properties that you can get and
// set but that do not get persisted to MongoDB. 
//The getters are useful for formatting or combining fields
//, while setters are useful for de-composing a single 
//value into multiple values for storage.

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log("Connection Open");
    })

    .catch(err => {
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

//this virtual property doesn't exist at db at all
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

//MiddleWare(pre save and post save)
personSchema.pre('save', async function () {
    this.first = "YO";
    this.last = "MAMA";
    console.log("About to save");
})

personSchema.post('save', async function () {
    console.log("JUST SAVED");
})


const Person = mongoose.model('Person', personSchema);

// const tammy = new Person({ first: 'Tammy', last: 'Chow' });
// tammy.save().then(data => console.log(data))
// console.log(tammy.fullName)                           //virtual but not in mongo db
// set(function (v) {
    //     this.name.first = v.substr(0, v.indexOf(' '));
    //     this.name.last = v.substr(v.indexOf(' ') + 1);
    // });


