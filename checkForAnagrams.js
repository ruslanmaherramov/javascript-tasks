// Create checkForAnagram function, that accepts 2 arguments (strings) and checks whether they are an anagram,
// returns true / false

// by array sorting
function checkForAnagramBySorting(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    return console.log('Error!');
  }

  if (string1.length !== string2.length) {
    console.log('false');
    return false;
  }

  const sortedString1 = [...string1.toLowerCase()].sort().join('');
  const sortedString2 = [...string2.toLowerCase()].sort().join('');

  if (sortedString1 === sortedString2) {
    console.log('true');
    return true;
  }

  console.log('false');
  return false;
}

checkForAnagramBySorting('roman', 'moRan');

// by character hashing
function checkForAnagramByHashing(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') {
    console.log('Error with types: should be a string!');
    return false;
  }

  if (string1.length !== string2.length) {
    console.log('false');
    return false;
  }

  function count(string) {
    let count = {};
    let newString = string.toLowerCase();

    for (let char of newString) {
      count[char] = count[char] ? count[char] + 1 : 1;
    }

    return count;
  }

  const count1 = count(string1);
  const count2 = count(string2);

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      console.log('false');
      return false;
    }
  }

  console.log('true');
  return true;
}

checkForAnagramByHashing('roman', 'moran');  // true
checkForAnagramByHashing('test', 'tes');    // false
