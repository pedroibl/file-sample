const express = require("express");
const morgan = require("morgan");
const nodemon = require("nodemon");
const { SlimNodeMySQL } = require("slim-node-mysql");
const bodyParser = require("body-parser");
const { listen } = require("express/lib/application");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public")).use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  return console.log(`Server listening on port ${port}`);
});
