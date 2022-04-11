const express = require("express");
const req = require("express/lib/request");
var cors = require("cors");
const https = require("https");
const app = express();
const port = 9000;
const fs = require("fs");

// var key = fs.readFileSync(__dirname + "/../certs/selfsigned.key");
// var cert = fs.readFileSync(__dirname + "/../certs/selfsigned.crt");

var key = fs.readFileSync("./selfsigned.key");
var cert = fs.readFileSync("./selfsigned.crt");

var options = {
  key: key,
  cert: cert,
};

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.get("/", cors(), (req, res) => {
  res.send("Got a GET cors() request");
  //   req.json({ msg: "This is CORS-enabled for a single route." });
});

app.post("/web_history", cors(), (req, res) => {
  console.log(req.body);
  res.send("Got a POST cors() request");

  //   req.json({ msg: "This is CORS-enabled for a single route." });
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server starting on port : ${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
