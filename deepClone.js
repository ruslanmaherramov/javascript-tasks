/**
 * Create a function deepMerge to marge 2 objects, use recursion for deep merge.
 */

function deepMerge(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b];
  }

  if (!isObject(a) || !isObject(b)) {
    return structuredClone(b);
  }

  const mergedObj = structuredClone(a);

  for (let key of Object.keys(b)) {
    const aValue = a[key];
    const bValue = b[key];

    if (key in a) {
      mergedObj[key] = deepMerge(aValue, bValue);
    } else {
      mergedObj[key] = structuredClone(bValue);
    }
  }

  return mergedObj;
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

const obj1 = {
  name: "Alice",
  details: {
    age: 25,
    address: { city: "NY" },
    hobbies: ["reading"]
  },
  active: false
};

const obj2 = {
  details: {
    age: 30,
    address: { country: "USA" },
    hobbies: ["traveling"]
  },
  active: true,
  score: 100
};

const result = deepMerge(obj1, obj2);
console.log(result);

/*
Expected Output:
{
  name: "Alice",
  details: {
    age: 30,
    address: { city: "NY", country: "USA" },
    hobbies: ["reading", "traveling"]
  },
  active: true,
  score: 100
}
*/
