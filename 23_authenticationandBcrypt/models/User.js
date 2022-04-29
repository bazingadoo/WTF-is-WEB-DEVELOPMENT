const mongoose = require("mongoose");

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

module.exports = mongoose.model("User", userSchema);
