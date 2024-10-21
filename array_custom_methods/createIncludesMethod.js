// Implement your own 'includes' method for arrays

Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
    if (fromIndex >= this.length) {
        return false;
    }

    const start = Math.max(fromIndex >= 0 ? fromIndex : this.length + fromIndex, 0);

    for (let i = start; i < this.length; i++) {
        if (this[i] === searchElement) {
            return true;
        }
    }

    return false;
}

const array = [2, 4, 6, 8, 10];
const filteredArray = array.myIncludes(4);

console.log(filteredArray);
