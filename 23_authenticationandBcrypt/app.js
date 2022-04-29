const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const session = require("express-session");

const sessionOptions = {
  secret: "thisissession",
  resave: false,
  saveUninitialized: false,
};
mongoose.connect("mongodb://localhost:27017/authDemo");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true })); //for parsing body
app.use(session(sessionOptions));

const requireLogin = (req, res, next) => {
  if (!req.session.user_id) {
    return res.redirect("/login");
  }
  next();
};

app.get("/", (req, res) => {
  res.send("This is the homepage");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", async (req, res) => {
  //   res.send(req.body);
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 12);
  const user = new User({
    username,
    password: hash,
  });
  await user.save();
  req.session.user_id = user.id;
  res.redirect("/");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  //   res.send(req.body);
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const validPassword = await bcrypt.compare(password, user.password);
  if (validPassword) {
    req.session.user_id = user.id;
    res.redirect("/secretcode");
  } else {
    res.redirect("/login");
  }
});

app.post("/logout", (req, res) => {
  //   req.session.user_id = null;
  //to destroy the session
  req.session.destroy();
  res.redirect("/login");
});

app.get("/secretcode", requireLogin, (req, res) => {
  res.render("secret");
});

app.get("/topsecret", requireLogin, (req, res) => {
  res.send("this is a top secret");
});

app.listen("3000", () => {
  console.log("app is working on 3000");
});
