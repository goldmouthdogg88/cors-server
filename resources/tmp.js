var fs = require("fs");

var buffer, fileName;

fileName = "./data.json";
buffer = fs.readFileSync(fileName);
bufferString = buffer.toString();
bufferObject = JSON.parse(bufferString);

console.log(bufferObject);
var data = { name: "Desmond" };
bufferObject.push(data);
var jsonBuffer = JSON.stringify(bufferObject, null, 4);

fs.writeFile("data.json", jsonBuffer, (err) => {
  if (err) throw err;
  console.log("File written sucessfully");
});
