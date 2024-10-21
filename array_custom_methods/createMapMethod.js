// Implement your own 'map' method for arrays.

Array.prototype.myMap = function (callback) {
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

const testArray = [1, 2, 3, 4, 5];
const updatedArray = testArray.myMap((item) => item * 10);

console.log(updatedArray);
