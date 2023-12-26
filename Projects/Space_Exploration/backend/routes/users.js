const router = require("express").Router();
const { loginUser, registerUser } = require("../controller/userController");

router.post("/login", loginUser);
router.post("/register", registerUser);

module.exports = router;
