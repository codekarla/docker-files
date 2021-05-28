require('dotenv').config();
const port = process.env.PORT || 80;
const appName = process.env.APPNAME;

const express = require('express');
const app = express();
const path = require('path');

// set the path
app.use(express.static(path.join(__dirname, "build")));

app.get('/', (req, res) => {
    res.render("index.html");
});

app.listen(port, () => {
    console.log(`${appName}: Listening on Port ${port}!`);
});
