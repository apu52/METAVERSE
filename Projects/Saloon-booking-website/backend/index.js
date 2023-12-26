const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const Mongodb = require('./db');
Mongodb();

app.use(cors()); // <-- Use cors middleware here

app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/api', require("./Routes/shopdata"));
app.use("/api/orderdata", require("./Routes/OrderData"));
app.use('/api/createuser', require("./Routes/CreateUser"));

app.listen(port, () => {
    console.log("Server is running...");
});
