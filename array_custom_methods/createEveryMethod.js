// Implement your own 'every' method for arrays.

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }

    return true;
}

const array = [1, 14, 30, 567, 33, 89, 90, 11];
const filteredArray = array.myEvery(item => item > 10);

console.log(filteredArray);
