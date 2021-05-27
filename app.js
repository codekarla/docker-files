require('dotenv').config();
const port = process.env.PORT || 8080;

const express = require('express');
const app = express();
const path = require('path');

// set the path
app.use(express.static(path.join(__dirname, "build")));

app.get('/', (req, res) => {
    res.render("index.html");
});

app.listen(port, () => {
    console.log("App is listening on Port 8080!");
});
