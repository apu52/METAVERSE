const axios = require("axios");
const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
  .catch(err => console.error(err))