// Write a function named linkedNumbersSum that receives one parameter
// an object representing the start node of a linked list. It has 2 properties:
// value - representing a number
// next - representing the next node in the linked list (or null if there is no next node)
// The function should return the sum of all the numbers in the linked list.

function linkedNumbersSum(node) {
  let result = 0;
  let currentNode = node;

  while (currentNode !== null) {
    result += currentNode.value;
    currentNode = currentNode.next;
  }

  return result;
}

const data = {
  next: {
    next: {
      next: null,
      value: 3
    },
    value: 2
  },
  value :1
}

console.log(linkedNumbersSum(data)); // 6
