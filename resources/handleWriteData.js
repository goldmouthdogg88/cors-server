const fs = require("fs");

const path = "./resources.json";

const fileExists = (path) => {
  if (fs.existsSync(path)) {
    console.log("exists", path);
  } else {
    console.log("does not exits: ", path);
  }
};

const fileEmpty = (path, cb) => {
  fs.readFile(path, (err, data) => {
    if (data.length == 0) {
      console.log("file is empty");
      cb();
    } else {
      console.log("file is not");
    }
  });
};

const addBracketToFile = (path) => {
  fs.writeFile(path, "[]", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("File written successfully\n");
      console.log("The file has the following contents:");
      console.log(fs.readFileSync(path, "utf8"));
    }
  });
};

fileExists(path);
fileEmpty(path, addBracketToFile(path));
