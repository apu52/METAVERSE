const router = require("express").Router();
const satelliteRoute = require("../controller/satelliteController");

router.get("/satellite-positions", satelliteRoute);

module.exports = router;
