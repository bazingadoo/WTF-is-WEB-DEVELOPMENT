const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name can't be empty"],
  },
  price: {
    type: Number,
    required: true,
    min: [0, "must be positive do ya"],
  },
  category: {
    type: String,
    lowerCase: true,
    enum: ["fruit", "vegetable", "dairy", "fungai"],
  },
});

const Product = mongoose.model("Product", productSchema);

//exporting
module.exports = Product;
