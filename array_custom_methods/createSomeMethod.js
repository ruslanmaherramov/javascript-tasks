// Implement your own 'some' method for arrays

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }

    return false;
}

const array = [1, 14, 30, 567, 33, 89, 90, 11];
const filteredArray = array.mySome(item => item > 10);

console.log(filteredArray);
