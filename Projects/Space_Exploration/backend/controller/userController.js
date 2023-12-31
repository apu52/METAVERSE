const User = require("../models/User");
const cloundinary = require("cloudinary");
const { sendTokens } = require("../utils/jwtTokens");

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return new Error("Please Enter Email and Password", 400);
  } else {
    try {
      const user = await User.findOne({
        email,
      }).select("+password");

      if (!user) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      const isPassword = user.comparePassword(password);

      if (!isPassword) {
        return res.status(401).json({ error: "Invalid email or password" });
      }
      sendTokens(user, 200, res);
    } catch (error) {
      console.log(error);
      res.status(500).json("Invalid");
    }
  }
};

exports.registerUser = async (req, res) => {
  const myCloud = await cloundinary.v2.uploader.upload(req.body.avatar, {
    folder: "avatars",
    width: 150,
    crop: "scale",
  });
  const { name, email, password } = req.body;

  try {
    const user = await User.create({
      name,
      email,
      password,
      image: { public_id: myCloud.public_id, url: myCloud.secure_url },
    });
    sendTokens(user, 201, res);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to register",
    });
  }
};
