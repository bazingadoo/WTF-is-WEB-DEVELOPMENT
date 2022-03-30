//exports and module.export are same
const add = (a, b) => a + b;

const PI = 3.141592653589793;

const square = x => x * x;

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// };

// module.exports = math;

exports.PI = PI;
exports.square = square;


//================================================================
// module.exports = 'hello world, I am here we are doing good';
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;

// module.exports.add = (a, b) => a + b;
// module.exports.PI = 3.141592653589793;
// module.exports.square = x => x * x;