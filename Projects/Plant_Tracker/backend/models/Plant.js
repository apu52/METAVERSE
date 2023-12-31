const mongoose = require("mongoose");

const PlantSchema = new mongoose.Schema({
  plantName: {
    type: String,
    required: true,
  },
  wateringSchedule: [String],
  careInstructions: {
    type: String,
    required: true,
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

const Plant = mongoose.model("Plant", PlantSchema);
module.exports = Plant;
