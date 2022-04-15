const express = require("express");
const app = express();
const morgan = require("morgan");

//HTTP request logger middleware for node.js
// app.use(morgan("common"));

app.use(morgan("tiny"));
app.use((req, res, next) => {
  // req.method = "GET";
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs");
  next();
});

// app.use((req, res, next) => {
//   console.log(req.query);
//   next();
// });

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennuggets") {
    next();
  }
  res.send("Sorry you need a password");
};

// app.use((req, res, next) => {
//   console.log("First MiddleWare");
//   return next(); //calling the next middleware
//   console.log("FIRST MiddleWare After calling next");
// });

// app.use((req, res, next) => {
//   console.log("Second MiddleWare");
//   return next();
// });

// app.use((req, res, next) => {
//   console.log("Third MiddleWare");
//   return next();
// });

app.get("/", (req, res) => {
  console.log(`REQUEST TIME : ${req.requestTime}`);
  res.send("Homepage");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST TIME : ${req.requestTime}`);
  res.send("woof, woof");
});

//callback verifyPasword-specific
app.get("/secret", verifyPassword, (req, res) => {
  res.send("The secret is : Everybody is secretly a hoe");
});

//404 status
app.use((req, res) => {
  res.status(404).send("Not found");
});

app.listen(3000, (req, res) => {
  console.log("listening on 3000");
});
