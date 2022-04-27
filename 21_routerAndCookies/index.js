const express = require("express");
const app = express();
const cartRoutes = require("./routes/cart");
const schoolRoutes = require("./routes/school");
const schoolmiddleware = require("./routes/schoolmiddleware");
const shelterRoutes = require("./routes/shelters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

app.use("/carts", cartRoutes);
app.use("/school", schoolRoutes);
app.use("/office", schoolmiddleware);
app.use("/shelters", shelterRoutes);
app.use("/dogs", dogRoutes);
app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Serving app on localhost:3000");
});
