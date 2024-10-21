// Write a function printNumbers(from, to) that outputs a number every second, starting from 'from' and ending with 'to'.
// Make two variants of the solution: using setInterval and using nested setTimeout.

// Using setInterval
let printNumbersWithInterval = function (from, to) {
    let counter = from;

    let interval = setInterval(function() {
        console.log(counter);

        if (counter === to) {
            clearInterval(interval);
        }

        counter++;
    }, 1000);

    return interval;
};

printNumbersWithInterval(1, 5);

// Using nested setTimeout
let printNumbersWithNestedTimeout = function (from, to) {
    let counter = from;

    setTimeout(function timeout() {
        console.log(counter);

        if (counter < to) {
            setTimeout(timeout, 1000);
        } else {
            clearTimeout(timeout);
        }

        counter++;
    }, 1000);
};

printNumbersWithNestedTimeout(1, 5);
