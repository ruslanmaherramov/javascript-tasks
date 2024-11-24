/**
 * Write a function named removeFirstAndLast that receives 2 parameters:
 * - a string named source;
 * - another string named target;
 * and returns a new string created by removing from source the first and last appearances of target.
 */

function removeFirstAndLast(source, target) {
  const indexOfFirstAppearance = source.indexOf(target);
  const indexOfLastAppearance = source.lastIndexOf(target);

  return (
    source.slice(0, indexOfFirstAppearance)
    + source.slice(indexOfFirstAppearance + target.length, indexOfLastAppearance)
    + source.slice(indexOfLastAppearance + target.length)
  )
}

const source1 = 'Hello World';
const target1 = 'l';
const target2 = 'Hello';

console.log(removeFirstAndLast(source1, target1)); // Helo Word
console.log(removeFirstAndLast(source1, target2)); //  World
