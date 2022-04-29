const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    requitred: [true, "Username cannot be empty"],
  },

  password: {
    type: String,
    required: [
      true,
      "why on this earth do you want to leave your password empty",
    ],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const foundUser = await this.findOne({ username });
  const isValid = await bcrypt.compare(password, foundUser.password);
  //if isValid is true, return foundUser, :(otherwise) false
  return isValid ? foundUser : false;
};

//pre i.e before it saves the user information, the password gets hashed
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
