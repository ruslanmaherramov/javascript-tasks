// TASK:
// Write a function `memoize` that:
// - Accepts a synchronous function as input.
// - Returns a new function with memoization applied.
// - Stores results of the function in a cache and retrieves them for repeated arguments.

export function memoize<T extends (...args: any[]) => any>(fn: T): T {
  let cached = {};

  return function (...args) {
    let updatedArgs = JSON.stringify(args);

    if (cached[updatedArgs]) {
      return cached[updatedArgs];
    }

    const fnResult = fn(...args);
    cached[updatedArgs] = fnResult;

    console.log(cached);

    return fnResult;
  };
}
