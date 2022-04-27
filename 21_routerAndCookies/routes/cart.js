const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hey there welcome to cart");
});

router.get("/:id", (req, res) => {
  res.send("Footwear for kids");
});

router.get("/:id/edit", (req, res) => {
  res.send("Edit the quantity");
});

module.exports = router;
