exports.sendTokens = (user, statusCode, res) => {
  try {
    const token = user.getJWTToken();

    const options = {
      httpOnly: true,
      expiresIn: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      secure: process.env.NODE,
    };

    res
      .status(statusCode)
      .cookie("token", token, options)
      .json({ success: true, token, user });
  } catch (err) {
    console.error("Error sending tokens:", err);
    res.status(500).json({
      success: false,
      message: "Failed to send tokens. Please try again later.",
    });
  }
};
