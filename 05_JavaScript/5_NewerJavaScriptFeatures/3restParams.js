//Numbers, strings and boolean, these are primitive types
//THE ARGUMENTS OBJECT
//IT COLLECTS ALL THE ARGUMENTS. IT IS LIKE AN ARRAY
//IT DOES NOT SUPPORT PUSH OR POP OR **REDUCE

//REST PARAMS COLLECTS ALL REMAINING ARGUMENTS INTO AN ACTUAL ARRAY

// function sum() {
//     return arguments.reduce((total, num) => total + num);
// }

//Output - Uncaught TypeError: arguments.reduce is not a function

//using rest params(collecting args like an actual array, can accept so many values/arguments)

//nums or args
function sum(...nums) {
  // console.log(nums);   //[nums1, nums2, nums3.....]
  return nums.reduce((total, value) => total + value);
}

console.log(sum(1, 4, 6));

//1
const filter = (...args) => args.filter((el) => el === 1);
console.log(filter(1, 3, 5, 7));

//2 EXAMPLE
function raceResults(gold, silver, ...everyoneElse) {
  console.log(`GOLD MEDAL GOES TO ${gold}`);
  console.log(`SILVER MEDAL GOES TO ${silver}`);
  console.log(`AND THANKS TO ${everyoneElse}`);
}

raceResults("Akshay", "Rahul", "Kinnin", "Kim", "Krish");

//ARRAY-DESTRUCTING
const scores = [634564, 7836473, 93748364, 735762, 98397];

const [gold, silver, bronze, ...everyoneElse] = scores; //making variable gold....
console.log(gold);
//gold - 634564, silver - 7836473, everyOneElse - 93748364, 735762, 98397

/*DESTRUCTING OBJECTS */
const user = {
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  password: "ttete564545gg",
  born: 1930,
  died: 1978,
  city: "Gaya",
  state: "Bihar",
  pincode: "123",
};

//copying the pointer only
// const secondUser = user;
// user.firstName = "rahul";
// console.log(secondUser);

//copying the values and pointer since arrays and objects are reference types
//creating a new object

// const secondUser = { ...user }; //holds the original properties
// user.firstName = "rahul";
// console.log(secondUser.firstName);  //john

const { firstName, lastName, email, city, state, pinCode = "N/A" } = user;
console.log(pinCode);
console.log(firstName);
console.log(user.pincode);

//renaming  varables
const { born: birthYear } = user;
console.log(birthYear);

/* DESTRUCTING PARAMS */

//1

// function fullName(user) {
//   return `${user.firstName} ${user.lastName}`;
// }
// console.log(fullName(user));

//======================================
// const gimmeName = {
//   nickName: "rawwr",
//   homeName: "poppy",
// };

// const { nickName, homeName } = gimmeName;

// console.log(gimmeName.homeName);

// const nameShown = ({ nickName }) => `my nick name is ${nickName} uwuwuw`;
// console.log(nameShown(gimmeName));

// ====================
//inverse
const nameShown = (gimmeName) => console.log(gimmeName.lastName);
nameShown({ firstName: "rawwwr", lastName: "popcorn" });

//2

// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }
// console.log(fullName(user));

//3  ----------main-----------

function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}
console.log(fullName(user));

//or
const printName = ({ firstName, born }) => `${firstName} ${born}`;
console.log(printName(user));

//4
const movies = [
  {
    title: "Shershah",
    score: 89,
    year: 2021,
  },
  {
    title: "Pushpa",
    score: 71,
    year: 2021,
  },
  {
    title: "Alien",
    score: 91,
    year: 1889,
  },
  {
    title: "starwars",
    score: 71,
    year: 1889,
  },
  {
    title: "Bulma",
    score: 81,
    year: 1880,
  },
  {
    title: "Alayu",
    score: 97,
    year: 1889,
  },
];

// movies.filter(movie => movie.score > 90);
const filt = movies.filter(({ score }) => score > 90);
console.log(filt);

// const ratings = movies.map(
//   (movie) => `${movie.title} ${movie.year} is rated ${movie.score}`
// );
// console.log(ratings);

// Destructing Params
const ratings = movies.map(
  ({ title, score, year }) => `${title} ${year} is rated ${score}` //real new array
);
console.log(ratings);

//5
const numbers = [1, 4, 6];
const twice = numbers.map((num) => num * 2); //real new array
console.log(twice);
