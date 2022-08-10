const { Repo } = require("../schemas");

const getRepos = async () => {
  try {
    const repos = await Repo.find();
    return repos;
  } catch (err) {
    throw { errSource: "MongoDB", ...err };
  }
};

const addRepo = async (attrs) => {
  try {
    await Repo.create(attrs);
  } catch (err) {
    throw { errSource: "MongoDB", ...err };
  }
};

module.exports = {
  addRepo,
  getRepos,
};
