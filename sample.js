const axios = require("axios");

const agent = axios.create({
  baseURL: "https://en.wikipedia.org/api/rest_v1/page/summary/",
});

agent
  .get("Home_Video")
  .then((res) => console.log(res))
  .catch((err) => console.trace(err));
