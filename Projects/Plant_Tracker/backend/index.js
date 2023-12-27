const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");
const dotenv = require("dotenv");
const plantRoute = require("./routes/plantRoute");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");

const app = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPI,
  api_secret: process.env.CLOUDSECERET,
});

app.use("/api/n1", plantRoute);

app.listen(5000, () => console.log("Listening on port 5000"));
