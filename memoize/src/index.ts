// TASK DESCRIPTION:
// 1. Implement a `memoize` decorator function in `memoize.ts`.
// 2. The decorator should cache the results of a function based on its arguments.
// 3. When a function is called with the same arguments, the cached result should be returned.
// 4. Ensure the solution works for synchronous functions only in this version.
// 5. You will find examples in `examples.ts` and unit tests in `tests.ts`.

// HOW TO START:
// 1. Open `memoize.ts` and implement the `memoize` decorator.
// 2. Run the examples in `examples.ts` to manually test your implementation.
// 3. Finally, ensure all unit tests in `memoize.test.ts` pass successfully.

// Uncomment the following imports and code after implementing the decorator:
import { memoize } from "./memoize";
import { exampleFunction } from "./examples";

// Example usage (uncomment after implementing):
const memoizedFunction = memoize(exampleFunction);
console.log(memoizedFunction(2)); // Should compute and return result// Should return cached result
console.log(memoizedFunction(2)); // Should return cached result
console.log(memoizedFunction(4));
console.log(memoizedFunction(2)); // Should return cached result
