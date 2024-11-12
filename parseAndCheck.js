// Create a function 'parseAndCheck' that takes an array of values.
// The function should return a new array with all values parsed to a number using parseFloat.
// If the parsing results in a NaN, throw an error with the message "Invalid Number"

// Add a parameter with options that will allow you to configure the parsing behavior:
// - ignore NaN values and just skip them instead of throwing an error.
// - replace the NaN value with some default value that can be passed via parameters.

function parseAndCheck(array, options = { ignoreNaN: false, defaultValue: null }) {
  return array.map(value => {
    const parsedValue = parseFloat(value);
    if (Number.isNaN(parsedValue)) {
      if (options.ignoreNaN) return options.defaultValue;
      throw new Error('Invalid Number');
    }
    return parsedValue;
  });
}

console.log(parseAndCheck(['1.562346','1.234asdf'])); // [1.562346, 1.234]
console.log(parseAndCheck(['1.56','asdf'], { ignoreNaN: true, defaultValue: 1 })); // [1.56, 1]
console.log(parseAndCheck(['1.562346','asdf'])); // Uncaught Error: Invalid Number
