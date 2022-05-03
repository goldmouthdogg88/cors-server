const { type } = require("express/lib/response");
var fs = require("fs");

// Use fs.readFile() method to read the file
fs.readFile("./resources.json", "utf8", function (err, data) {
  // Display the file content

  console.log(typeof data);
});
