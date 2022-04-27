const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to school");
});

router.get("/class", (req, res) => {
  res.send("welcome to class 4");
});

router.get("/class/:roll", (req, res) => {
  res.send("roll is not assigned yet");
});

router.get("/class/:roll/name", (req, res) => {
  res.send(" name yet to be assigned");
});

module.exports = router;
