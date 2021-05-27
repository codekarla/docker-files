require('dotenv').config();
const port = process.env.PORT || 8080;

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log("App is listening on Port 8080!");
});
