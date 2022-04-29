//this one is just for how bcrypt works
const bcrypt = require("bcrypt");

// const hashPassword = async (password) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(password, salt);
//   console.log(salt);
//   console.log(hash);
// };

const hashPassword = async (password) => {
  const hash = await bcrypt.hash(password, 12);
  console.log(hash);
};

// Load hash from password DB to check a password for authentication

const login = async (password, hashpw) => {
  const passwordHash = await bcrypt.compare(password, hashpw);
  if (passwordHash) {
    console.log("logged in successfully");
  } else {
    console.log("INCORRECT!");
  }
};

// hashPassword("akshay");
login(
  "aksYhay",
  "$2b$12$gs.BcF6FhWPXN7QyKDlneuL3pysqZ0TSs/6i5DqpqI5jwdhRSm/Ni"
);
