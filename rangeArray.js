// The range(..) function takes a number as its first argument,
// representing the first number in a desired range of numbers.
// The second argument is also a number representing the end of the desired range (inclusive).
// If the second argument is omitted, then another function should be returned that expects that argument.

function range(start, end) {
    start = Number(start) || 0;

    if (end === undefined) {
        return function getEnd(end) {
            getRange(start, end);
        }
    } else {
        end = Number(end) || 0;

        return getRange(start, end);
    }

    function getRange(start, end) {
        let arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }

        return console.log(arr);
    }
}

range(3,8);    // [3,4,5,6,7,8]
range(3,0);    // []
range(3,3);    // [3]

let startFrom3 = range(3);
let startFrom4 = range(4);

startFrom3(3);     // [3]
startFrom3(8);     // [3,4,5,6,7,8]
startFrom3(0);     // []

startFrom4(6);     // [4,5,6]
