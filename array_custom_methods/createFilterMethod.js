// Implement your own 'filter' method for arrays.

Array.prototype.myFilter = function (callback) {
    let array = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array.push(this[i]);
        }
    }

    return array;
}

const testArray = [1, 14, 3, 567, 33, 89, 9, 11];
const filteredArray = testArray.myFilter(item => item > 10);

console.log(filteredArray);
