const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const appError = require("./AppError");

const Product = require("./models/product");
const { resolveSrv } = require("dns/promises");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("MONGO Connection Open");
  })

  .catch((err) => {
    console.log("OGH NO WE GOT A MONGO ERRROR");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(methodOverride("_method"));

//request-response
const categories = ["fruit", "vegetable", "dairy", "fungai"];

app.get("/products", async (req, res, err) => {
  try {
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category });
      res.render("products/index", { products, category });
    } else {
      const products = await Product.find({});
      res.render("products/index", { products, category: "All" });
    }
  } catch (err) {
    next(err);
  }
  // const products = await Product.find({});
  // // console.log(products)
  // // res.send('ALL PRODUCTS WILL BE HERE')
  // res.render('products/index', { products })
});

app.get("/products/new", (req, res) => {
  //   throw new appError("Not Allowed", 401);
  res.render("products/new", { categories });
});

//submitting the form with new product
app.post("/products", async (req, res, next) => {
  // console.log(req.body);
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    //   console.log(newProduct);
    // res.send('making your product!');
    res.redirect(`/products/${newProduct._id}`);
  } catch (error) {
    next(error);
  }
});

app.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new appError("This product does not exist", 404);
    }
    res.render("products/show", { product });
  } catch (e) {
    next(e);
  }
});

app.get("/products/:id/edit", async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  if (!product) {
    return next(new appError("This product does not exist", 404));
  }
  // console.log(product);
  // res.send('details page!')
  res.render("products/edit", { product, categories });
});

//we need to installl method-override thru npm
app.put("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    // console.log(req.body);
    res.redirect(`/products/${product._id}`);
  } catch (e) {
    next(e);
  }
});

app.delete("/products/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await Product.findByIdAndDelete(id);
  res.redirect("/products");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "something broke!" } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("We are connected to the server");
});
