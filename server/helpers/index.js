const axios = require("axios");

module.exports = {
  getRepoFromGithub: async (username, repo) => {
    let options = {
      method: "get",
      url: `https://api.github.com/repos/${username}/${repo}`,
      headers: {
        "User-Agent": "request",
        Authorization: `token ${process.env.GITHUB_API_TOKEN}`,
      },
    };

    try {
      const { data } = await axios(options);
      return data;
    } catch (err) {
      throw { errSource: "Github API", ...err };
    }
  },
};
