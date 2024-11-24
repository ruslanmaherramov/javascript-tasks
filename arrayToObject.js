// Write a function named arrayToObject that receives an array of strings as parameter and returns an object
// where each key is an item of the array and its value is the index of that item.
// If there are duplicate strings in the array, value inside the object should be the index of it's first occurrence.

const array = ["JavaScript", "is", "awesome", "is"]

function arrayToObject(strings) {
  let obj = {};

  strings.forEach((string, index) => {
    if (obj[string] === undefined) {
      obj[string] = index;
    }
  })

  return obj;
}

console.log(arrayToObject(array));
