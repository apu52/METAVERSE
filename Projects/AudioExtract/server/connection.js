const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const app = express();
dotenv.config({ path: "./.env" });

const URI = process.env.DATABASE;

mongoose
  .connect(URI)
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((err) => console.log(err));
