// Implement a 'promiseMerge' function that accepts two promises (p1, p2) and an optional customizer function.
// If both promises resolve to the same type, merge them based on their type:
// numbers (multiply), strings (concatenate), arrays (concatenate), or objects (merge properties).
// If the types differ, or if either promise rejects, function should reject with the reason or an error message.

function promiseMerge(p1, p2, customizer = null) {
  return Promise.allSettled([p1, p2])
    .then(([p1Result, p2Result]) => {
      if (p1Result.status === 'rejected') return Promise.reject(p1Result.reason);
      if (p2Result.status === 'rejected') return Promise.reject(p2Result.reason);

      const val1 = p1Result.value;
      const val2 = p2Result.value;
      let result;

      if (typeof val1 === "number" && typeof val2 === "number") {
        result = val1 * val2;
      } else if (typeof val1 === "string" && typeof val2 === "string") {
        result = val1 + val2;
      } else if (Array.isArray(val1) && Array.isArray(val2)) {
        result = [...val1, ...val2];
      } else if (typeof val1 === "object" && typeof val2 === "object") {
        result = {...val1, ...val2};
      } else {
        return Promise.reject('Unsupported data types');
      }

      return customizer ? customizer(val1, val2)  : result;
    });
}

// Example of usage
promiseMerge(Promise.resolve(5), Promise.resolve(2), (res1, res2) => res1 * res2)
  .then(console.log); // 10

promiseMerge(Promise.resolve("abc"), Promise.resolve("def"))
  .then(console.log); // 'abcdef'

promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6]))
  .then(console.log); // [1, 2, 3, 4, 5, 6]

promiseMerge(Promise.resolve({ foo: 1 }), Promise.resolve({ bar: 2 }))
  .then(console.log); // { foo: 1, bar: 2}

promiseMerge(Promise.resolve(1), Promise.resolve([]))
  .catch(console.error); // Rejected with 'Unsupported data types'

promiseMerge(Promise.reject(1), Promise.resolve(2))
  .catch(console.error); // Rejected with 1
