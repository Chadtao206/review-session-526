const axios = require("axios");
axios
  .get("https://wendy-cors.herokuapp.com/https://www.yahoo.com/")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
