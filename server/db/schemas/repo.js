const mongoose = require("mongoose");

const repoSchema = new mongoose.Schema({
  username: { type: String, required: true },
  repo: { type: String, unique: true, required: true, dropDups: true },
  url: { type: String, unique: true, required: true, dropDups: true },
});

const Repo = mongoose.model("Repo", repoSchema);

module.exports = Repo;
