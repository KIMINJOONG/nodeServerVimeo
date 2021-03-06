var express = require("express");
var app = express();

app.listen(3000, () => {
  console.log("start!! express server on port 3000");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/main", (req, res) => {
  res.sendFile(__dirname + "/public/main.html");
});
