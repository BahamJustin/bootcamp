// importing file system module
const fs = require("fs");

// name of file, file data, error callback
fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
  // if error exists ,log error, but if it doesnt exist log all good
  err ? console.error(err) : console.log("Commit logged!")
);
