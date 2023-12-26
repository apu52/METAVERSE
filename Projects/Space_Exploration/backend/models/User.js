const mongoose = require("mongoose");
const bycrpt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    maxlength: [30, "Name cannot exceed 30 characters."],
    minlength: [5, "Name should have at least 5 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minlength: [8, "Password should be at least 8 characters long."],
    select: false,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
  return await bycrpt.compare(enteredPassword, this.password);
};

UserSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
