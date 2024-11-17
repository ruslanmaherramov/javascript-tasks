// Write a function called specialAdd. If you give this function a number, it returns a new function to you.
// If you give this function no arguments, it returns the total of all the numbers you've passed to it so far.

// Examples:
// specialAdd(); // 0
// specialAdd(1)(2)(); // 3
// specialAdd(2)(8)(5)(1)(); // 16

function specialAdd(total) {
  if (total === undefined) return 0;

  return function innerFunc(number) {
    if (number === undefined) return total;
    total += number;

    return innerFunc;
  }
}

specialAdd(); // 0
specialAdd(1)(2)(); // 3
specialAdd(2)(8)(5)(1)(); // 16
