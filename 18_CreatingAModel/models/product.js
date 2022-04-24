const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
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
  farm: {
    type: Schema.Types.ObjectId,
    ref: "Farm",
  },
});

const Product = mongoose.model("Product", productSchema);

//exporting
module.exports = Product;
