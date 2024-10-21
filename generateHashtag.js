// Create a function generateHashtag:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
//
// Examples:
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    if (!str.trim()) return false;

    let result = '#' + str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

    return result.length > 140 ? false : result;
}

const string = " Hello there thanks for trying my Kata ";

generateHashtag(string);
