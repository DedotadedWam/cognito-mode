const { repos } = require("../db/models");
const { getRepoFromGithub } = require("../helpers");

const getRepos = async (req, res) => {
  try {
    const data = await repos.getRepos();
    res.status(200).json(data);
  } catch (err) {
    res.status(400).send({ errMsg: err });
  }
};

const addRepo = async (req, res) => {
  const { username, repo } = req.body;
  try {
    const data = await getRepoFromGithub(username, repo);
    await repos.addRepo({
      username,
      repo,
      url: data.url,
    });
    res.status(201).send("OK!");
  } catch (err) {
    res.status(400).send({ errMsg: err });
  }
};

module.exports = {
  addRepo,
  getRepos,
};
