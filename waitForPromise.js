// Implement asynchronous function that uses a timer to simulate delayed execution and handles potential errors

// Create a function wait():
// - takes a duration parameter in milliseconds;
// - returns a Promise, that resolves with the string "Promise successfully resolved!" after duration time;
// - or rejects with a 50% probability, and return error message;

// Create an async function demo():
// - logs "start" to the console;
// - calls wait(duration), waits for its result;
// - if wait() resolves: continue the following code in function, logs the resolved value;
// - if wait() rejects: logs "An error occurred: Promise was rejected!";

function wait(duration) {
  const randomNumber = Math.random();

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (randomNumber < 0.5) {
        resolve("Promise successfully resolved!");
      } else {
        reject("Promise was rejected!");
      }
    }, duration);
  });
}

async function demo() {
  try {
    console.log("start");
    const resolvedValue = await wait(2000);
    console.log(resolvedValue);
    console.log("end");
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

demo();
