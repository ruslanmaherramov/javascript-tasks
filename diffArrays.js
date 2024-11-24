// Write a function named diffArrays that receives 2 Arrays of numbers as parameters.
// The function should return a new Array, that contains all numbers from the first array
// that are not in the second one, and all numbers from the second array that are not in the first one.

function diffArrays(numbers1, numbers2) {
  const newArr = [...numbers1, ...numbers2];

  return newArr.filter((item) => !(numbers1.includes(item) && numbers2.includes(item)));
}

const numbers1 = [11, 96, 103, -5, 0, 12, 1];
const numbers2 = [0, 1, 2, 3, 4, 5];

console.log(diffArrays(numbers1, numbers2));
// [11, 96, 103, -5, 12, 2, 3, 4, 5]
