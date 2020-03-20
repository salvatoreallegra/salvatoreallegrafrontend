const path = require("path");
const express = require("express");
const router = express.Router();
const app = express();
app.use((req, res, next) => {
  console.log("In middleware");
  res.send("<h1>node app</h1>");
});
app.listen(3000);
