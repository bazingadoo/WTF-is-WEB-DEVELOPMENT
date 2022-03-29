//creating a method in an object
//Methods are simply functions added as propertiess on objects
// const myMath = {
//     PI: 3.141592653589793,
//     square: function (n) {
//         return n * n;
//     },
//     cube: function (n) {
//         return n ** 3;
//     }
// }

//we can access them like myMath.square(2)

//shorthand-shortcut 
const myMath = {
    PI: 3.141592653589793,
    square(n) {
        return n * n;
    },
    cube(n) {
        return n ** 3;
    }
}
