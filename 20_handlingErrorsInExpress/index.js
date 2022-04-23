const express = require("express");
const app = express();
const morgan = require("morgan");

const AppError = require("./AppError");
//HTTP request logger middleware for node.js
app.use(morgan("common"));

app.use(morgan("tiny"));
app.use((req, res, next) => {
  // req.method = "GET";
  req.requestTime = Date.now();
  console.log(req.method, req.path);
  return next();
});

app.use("/dogs", (req, res, next) => {
  console.log("I love dogs");
  return next();
});

// app.use((req, res, next) => {
//   console.log(req.query);
//   next();
// });

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennuggets") {
    return next();
  }
  throw new AppError("password required", 401);
  // return res.send("Sorry you need a password");
  // res.status(401);
  // throw new AppError("Password Required", 400);
};

app.get("/", (req, res) => {
  console.log(`REQUEST TIME : ${req.requestTime}`);
  res.send("Homepage");
});

app.get("/dogs", (req, res) => {
  console.log(`REQUEST TIME : ${req.requestTime}`);
  res.send("woof, woof");
});

app.get("/error", (req, res) => {
  chicken.food();
});

//callback verifyPasword-specific
app.get("/secret", verifyPassword, (req, res) => {
  res.send("The secret is : Everybody is secretly a hoe");
});

//admin route
app.get("/admin", (req, res) => {
  throw new AppError("You are not an Admin!", 403);
});

//404 status
app.use((req, res) => {
  res.status(404).send("Not found");
});

//WRITING ERROR HANDLERS
// app.use((err, req, res, next) => {
//   console.log("*******Error************");
//   // res.status(500).send("Something broke!");
//   next(err);
// });

app.use((err, req, res, next) => {
  const { status = 500, message = "something broke!" } = err;
  res.status(status).send(message);
});

app.listen(3000, (req, res) => {
  console.log("listening on 3000");
});
