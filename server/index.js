require("dotenv").config();
require("./db");
const express = require("express");
const path = require("path");
const axios = require("axios");

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(express.json());

app.post("/repo/add", (req, res) => {
  const { username, repo } = req.body;
  let options = {
    method: "get",
    url: `https://api.github.com/repos/${username}/${repo}`,
    headers: {
      "User-Agent": "request",
      Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
    },
  };
  axios(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(PORT, () => console.log("listening on port " + PORT));

module.exports = app;
