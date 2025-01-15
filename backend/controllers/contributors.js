const express = require("express");
const router = express.Router();

const contributors = async (req, res) => {
  const token = process.env.CONTRIBUTORS_TOKEN;
  const page1 = 1;
  const page2 = 2;
  const perPage = 100;
  const owner = "apu52";
  const repo = "METAVERSE";

  const url1 = `https://api.github.com/repos/${owner}/${repo}/contributors?page=${page1}&per_page=${perPage}`;
  const url2 = `https://api.github.com/repos/${owner}/${repo}/contributors?page=${page2}&per_page=${perPage}`;

  try {
    const response1 = await fetch(url1, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Node.js",
      },
    });

    if (!response1.ok) {
      throw new Error(`GitHub API responded with status ${response1.status}`);
    }

    const response2 = await fetch(url2, {
      method: "GET",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Node.js",
      },
    });

    if (!response2.ok) {
      throw new Error(`GitHub API responded with status ${response2.status}`);
    }

    const contributorsData1 = await response1.json();
    const contributorsData2 = await response2.json();
    const contributorsData = [...contributorsData1, ...contributorsData2];
    
    // Send the data back to the client
    res.json({
      success: true,
      data: contributorsData,
    });
  } catch (error) {
    console.error(`Error while fetching the contributors data: ${error}`);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = { contributors };