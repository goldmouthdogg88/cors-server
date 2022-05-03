const express = require("express");
const req = require("express/lib/request");
var cors = require("cors");
const https = require("https");
const app = express();
const port = 9000;
const fs = require("fs");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// var key = fs.readFileSync(__dirname + "/../certs/selfsigned.key");
// var cert = fs.readFileSync(__dirname + "/../certs/selfsigned.crt");

var key = fs.readFileSync("./selfsigned.key");
var cert = fs.readFileSync("./selfsigned.crt");

var options = {
  key: key,
  cert: cert,
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/json", cors(), (req, res) => {
  res.send(req.body);
  res.send(req.body);
  //   req.json({ msg: "This is CORS-enabled for a single route." });
});

app.post("/web_history", cors(), (req, res) => {
  console.log(req.body);
  // read resources/resources.json

  let buffer, fileName;

  fileName = "./data.json";
  buffer = fs.readFileSync(fileName);
  bufferString = buffer.toString();
  bufferObject = JSON.parse(bufferString);

  console.log(bufferObject);

  bufferObject.push(req.body);
  var jsonBuffer = JSON.stringify(bufferObject, null, 4);

  fs.writeFile("data.json", jsonBuffer, (err) => {
    if (err) throw err;
    console.log("File written sucessfully");
  });

  // write resources/resources.json
  res.send("request done...");

  // res.json({ msg: "This is CORS-enabled for a single route." });
});

var server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server starting on port : ${port}`);
});

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
