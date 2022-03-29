//this in the method
// const cat = {
//     name: 'bluetooth',
//     color: 'grey',
//     breed: 'indian',
//     meow() {
//         console.log('this is ', this);
//         console.log(`${this.name} says Meow! Mowww ! MOwww`);
//     }
// }
// cat.meow()       //will invoke, this refers to the cat object
// const meow2 = cat.meow; //will not invoke, this refers to the window object


//laying eggs
const hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return 'EGG';
    }
}
console.log(hen.name);
console.log(hen.eggCount);
console.log(hen.layAnEgg());
console.log(hen.layAnEgg());
console.log(hen.eggCount);
