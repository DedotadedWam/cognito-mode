const express = require("express");
const path = require("path");

const app = express();

const PORT = 8080;

console.log(path.join(__dirname, "..", "client", "dist", "index.html"));

app.use(express.static(path.join(__dirname, "..", "client", "dist")));

app.listen(PORT, () => console.log("listening on port " + PORT));

module.exports = app;
