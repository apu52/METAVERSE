const Plant = require("../models/Plant");
const cloudinary = require("cloudinary");

exports.registerPlant = async (req, res) => {
  const { plantName, wateringSchedule, careInstructions } = req.body;

  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "plants",
      width: 150,
      crop: "scale",
    });

    const plant = await Plant.create({
      plantName,
      wateringSchedule,
      careInstructions,
      image: { public_id: myCloud.public_id, url: myCloud.secure_url },
    });

    res.status(201).json({
      success: true,
      message: "Plant registered successfully",
      data: plant,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to register plant" });
  }
};

exports.getallPlants = async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json({
      success: true,
      message: "Plants retrieved successfully",
      data: plants,
    });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve plants" });
  }
};

exports.getPlantById = async (req, res) => {
  const plantId = req.params.id;
  try {
    const plant = await Plant.findById(plantId);

    if (!plant) {
      return res
        .status(404)
        .json({ success: false, message: "Plant not found" });
    }

    res.status(200).json({ success: true, data: plant });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

exports.deletePlant = async (req, res) => {
  const plantId = req.params.id;

  try {
    const deletedPlant = await Plant.findByIdAndRemove(plantId);

    if (!deletedPlant) {
      return res.status(404).json({
        success: false,
        message: "Plant not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Plant deleted successfully",
      data: deletedPlant,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to delete plant",
    });
  }
};
