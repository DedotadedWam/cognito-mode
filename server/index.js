require("dotenv").config();
require("./db");
const express = require("express");
const path = require("path");

const { repos } = require("./controllers");

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(express.json());

app.get("/repo", repos.getRepos);

app.post("/repo/add", repos.addRepo);

app.listen(PORT, () => console.log("listening on port " + PORT));

module.exports = app;
