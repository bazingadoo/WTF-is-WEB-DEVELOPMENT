const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
  secret: "thisissession",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.get("/viewsession", (req, res) => {
  //   res.send("you have viewd this page");
  if (req.session.count) {
    req.session.count += 1;
  } else {
    req.session.count = 1;
  }
  res.send(`you have viewed this page ${req.session.count} times`);
});

app.get("/register", (req, res) => {
  const { username = "Akshay" } = req.query;
  req.session.username = username;
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  res.send(`you have got resistered ${username}`);
});

app.get;

app.listen(3000, () => {
  console.log("listening on http://localhost");
});
