// Write a function named pickFields that receives 2 parameters: an object - data, an Array of strings - fields;
// The function should return a new object that contains all properties of data
// whose name is present in the fields array.

// using forEach
// function pickFields(data, fields) {
//   const result = {};
//
//   fields.forEach((field) => {
//     if (field in data) {
//       result[field] = data[field];
//     }
//   });
//
//   return result;
// }

// using reduce
function pickFields(data, fields) {
  return fields.reduce((result, field) => {
    if (field in data) {
      result[field] = data[field];
    }

    return result;
  }, {})
}

const data1 = {"color":"blue","name":"Earth","solarSystem":"Milky Way"}
const fields1 = ["name","color"]

const data2 = {"year":1995,"name":"JavaScript","inventor":"Brendan Eich"}
const fields2 = ["job","age","name"]

console.log(pickFields(data1, fields1));
console.log(pickFields(data2, fields2));
