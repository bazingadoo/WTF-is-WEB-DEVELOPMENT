const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  //?isPrincipal=true
  if (req.query.isPrincipal) {
    return next();
  }
  return res.send("SORRY NOT A Principal!");
});

router.get("/", (req, res) => {
  res.send("welcome to office");
});

router.get("/attendance", (req, res) => {
  res.send("CheckingAttendance");
});

router.get("/attendance/history", (req, res) => {
  res.send("history of the attendance");
});

module.exports = router;
