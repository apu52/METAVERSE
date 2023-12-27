const {
  registerPlant,
  getallPlants,
  deletePlant,
  getPlantById,
} = require("../controllers/plantController");
const router = require("express").Router();

router.post("/add", registerPlant);
router.get("/get-plants", getallPlants);
router.get("/plant/:id", getPlantById);
router.delete("/delete/:id", deletePlant);
module.exports = router;
