const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const cloudinary = require("cloudinary");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const fileUpload = require("express-fileupload");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("connected to mongo db"))
  .catch((err) => console.log(err));

cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPI,
  api_secret: process.env.CLOUDSECERET,
});
app.use("/api/n1", userRoute);
app.use("/api/n1/satellite", async (req, res) => {
  try {
    const apiKey = process.env.APIKEY;
    const latitude = process.env.LAT;
    const longitude = process.env.LONG;
    const apiUrl = `https://api.n2yo.com/rest/v1/satellite/positions/48859/${latitude}/${longitude}/0/1/?apiKey=${apiKey}`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }

    const data = await response.json();
    res.json({ positions: data.positions });
  } catch (err) {
    console.log("Error in fetching", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/api/n1/space-station", async (req, res) => {
  try {
    const apiKey = process.env.APIKEY;
    const latitude = process.env.LAT;
    const longitude = process.env.LONG;

    const apiUrl = `https://api.n2yo.com/rest/v1/satellite/positions/25544/${latitude}/${longitude}/0/1/?apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    const data = await response.json();
    res.json({ positions: data.positions });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.use("/api/n1/ses-satellite", async (req, res) => {
  try {
    const apiKey = process.env.APIKEY;
    const latitude = process.env.LAT;
    const longitude = process.env.LONG;

    const apiUrl = `https://api.n2yo.com/rest/v1/satellite/positions/36516/${latitude}/${longitude}/0/1/?apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    const data = await response.json();
    res.json({ positions: data.positions });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.use("/api/n1/agile-satellite", async (req, res) => {
  try {
    const apiKey = process.env.APIKEY;
    const latitude = process.env.LAT;
    const longitude = process.env.LONG;

    const apiUrl = `https://api.n2yo.com/rest/v1/satellite/positions/36516/${latitude}/${longitude}/0/1/?apiKey=${apiKey}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    const data = await response.json();
    res.json({ positions: data.positions });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.use("/api/n1/space-launches", async (req, res) => {
  try {
    const apiUrl = "https://fdo.rocketlaunch.live/json/launches/next/5";
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    res.json({ result: data.result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use("/api/n1/space-events", async (req, res) => {
  try {
    const apiUrl = "https://calendarific.p.rapidapi.com/holidays";
    const apiKey = "fd8114ebf7msh5e4a2c5249cbb92p1b812cjsnd62dfc0e2278";

    const country = "US";
    const year = 2023;
    const month = 1;

    const queryParams = `?country=${country}&year=${year}&month=${month}`;

    const url = `${apiUrl}${queryParams}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: process.env.AUTHAPI,
        "X-RapidAPI-Key": process.env.CALAPI,
        "X-RapidAPI-Host": process.env.CALDOM,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Define email content
const getEmailOptions = (to, subject, text) => ({
  from: process.env.EMAIL,
  to,
  subject,
  text,
});
app.use("/api/n1/schedule-email", async (req, res) => {
  try {
    const { email, launchName, launchTime } = req.body;

    const launchDateTime = new Date(launchTime);

    const job = scheduleEmail(launchDateTime, email, launchName);

    res.json({
      success: true,
      message: "Email Remainder successfully created",
    });
  } catch (err) {
    res.status(500).json({ success: false, err: "Cannot place the Email" });
  }
});

const scheduleEmail = (launchDateTime, email, launchName) => {
  const now = new Date();
  const timeUntilLaunch = launchDateTime - now;

  setTimeout(() => {
    const mailOptions = getEmailOptions(
      email,
      "Space Launch Reminder",
      `Reminder: The space launch "${launchName}" is scheduled!`
    );

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Email sent: ${info.response}`);
      }
    });
  }, timeUntilLaunch);
};

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(5000, () => console.log("server running on 5000 port"));
