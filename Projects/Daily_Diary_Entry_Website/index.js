const fs = require("fs");
const express = require("express"); //your express app
const port = 54310;
const app = express();

var logs = null;

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/logs", (req, res) => {
  // Read the log file and return the data as JSON
  fs.readFile(__dirname + "/logs.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving log data:" + err);
    } else {
      logs = JSON.parse(data);
      res.json(logs);
    }
  });
});

app.post("/", (req, res) => {
  // Append the log message to the log file
  const message = req.body.logMessage;
  const date = new Date();
  const timestampString =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();
  fs.readFile(__dirname + "/logs.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving log data." + err);
    } else {
      logs = JSON.parse(data);
      logs["logs"].push({
        timestamp: timestampString,
        text: message,
      });
      fs.writeFileSync(__dirname + "/logs.json", JSON.stringify(logs), {
        flag: "w",
      });
      res.sendFile(__dirname + "/public/index.html");
    }
  });
});
app.listen(port, () => {
  console.log("JEEDevLog listening at http://localhost:" + port);
});
