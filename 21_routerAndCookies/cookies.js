const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisisencrypted"));
app.get("/pets", (req, res) => {
  //   console.log(req.cookies);
  const { name = "akshay" } = req.cookies;
  res.send(`Hey there, ${name}`);
});

app.get("/setpetname", (req, res) => {
  res.cookie("name", "rocky");
  res.cookie("breed", "dogs");
  res.send("OK SEND U A COOKIE");
});

app.get("/signedcookies", (req, res) => {
  res.cookie("fruits", "apple", { signed: true });
  console.log(req.cookies);
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
