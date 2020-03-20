const path = require("path");
const express = require("express");
const router = express.Router();
const app = express();
const port = process.env.PORT || 3000;
// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname + "/index.html"));
// });

app.use(express.static("public"));
app.listen(port);
