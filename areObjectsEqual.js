// Create a function 'areObjectsEqual', which compares 2 objects for equality.

let obj1 = { a: 1, b: 2, c: { d: 4 } };
let obj2 = { b: 2, a: 1, c: { d: 4 } };

function areObjectsEqual(a, b) {
    if (typeof a !== 'object' || typeof b !== 'object' || a === null || b === null) {
        return a === b;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        console.log('keys length is not equal');
        return false;
    }

    if (!keysA.every(key => keysB.includes(key))) {
        console.log('keys are not equal');
        return false;
    }

    for (let key of keysA) {
        if (!areObjectsEqual(a[key], b[key])) {
            console.log('objects are not equal');
            return false;
        }
    }

    console.log('objects are equal');
    return true;
}

areObjectsEqual(obj1, obj2);
