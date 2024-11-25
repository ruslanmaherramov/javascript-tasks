/**
 * Write a function named areValuesUnique that receives an Array of numbers as parameter.
 * The function should return a boolean verifying if the array contains only unique numbers.
 */

// using Set
// function areValuesUnique(numbers) {
//   const set = new Set(numbers);
//
//   if (set.size === numbers.length) {
//     return true;
//   }
//
//   return false;
// }

// using some method
function areValuesUnique(numbers) {
  return numbers.some((item, index) => numbers.indexOf(item) !== index);
}

// using object
// function areValuesUnique(arr) {
//   const seen = {};
//   for (const el of arr) {
//     if (seen[el]) {
//       return false;
//     }
//     seen[el] = true;
//   }
//
//   return true;
// }

const numbers1 = [4,6,-8,14];
const numbers2 = [0,1,2,3,4,3];

console.log(areValuesUnique(numbers1)); // true
console.log(areValuesUnique(numbers2)); // false
