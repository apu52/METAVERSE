const axios = require("axios");
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

exports.satellitePostions = async (req, res) => {
  try {
    const response = await fetch(
      "https://api.n2yo.com/rest/v1/satellite/positions/48859/12.97623/77.60329/0/2/&apiKey=6EFUWD-P9TUBG-RJX7VG-55ZT"
    );
    if (!response.ok) {
      throw new Error("Failed to Fetch");
    }
    const data = await response.json();
    res.json({ positions: data.positions });
  } catch (err) {
    console.log("Error in fecting");
    res.status(500);
  }
};
