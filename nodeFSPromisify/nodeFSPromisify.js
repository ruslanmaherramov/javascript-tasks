// Write a function that reads a file asynchronously using Node.js and returns a promise.
// The function should resolve with the file's content or reject if there is an error.

// Using this function, create a promise chain that reads three text files (haiku1.txt, haiku2.txt, haiku3.txt).
// Each file’s content should be printed to the console. If any file fails to load, handle the error by logging it.

const fs = require("fs");

function asyncReadFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

asyncReadFile("./haiku1.txt")
  .then((data) => {
    console.log("HAIKU 1");
    console.log(data);
    return asyncReadFile("./haiku2.txt");
  })
  .then((data) => {
    console.log("HAIKU 2");
    console.log(data);
    return asyncReadFile("./haiku3.txt");
  })
  .then((data) => {
    console.log("HAIKU 3");
    console.log(data);
  })
  .catch((err) => console.log("Something went wrong:", err));
