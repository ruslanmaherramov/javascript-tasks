// Implement a currying function that transforms a function into a sequence of nested functions.
// The curried function should accept arguments one by one (or in groups)
// until the original function's argument count is satisfied.

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function multiply(a, b, c) {
  return a * b * c;
}

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2,3,4));
console.log(curriedMultiply(2)(3)(4));
console.log(curriedMultiply(2, 3)(4));
console.log(curriedMultiply(2)(3, 4));
