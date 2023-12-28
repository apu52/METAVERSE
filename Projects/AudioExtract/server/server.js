const express = require("express");
const app = express();
require("./connection");
const route = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", route);

app.listen(5000, () => {
  console.log("listening on port 5000");
});
