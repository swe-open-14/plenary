/**
 * The `Array.prototype.find` method returns the value of the first element
 * that satisfies the provided testing function.
 *
 * We can implement our own find method (albeit cluncky).
 */
function find(array, test) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (test(element)) {
      return array[i];
    }
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(n) {
  return n % 2 === 0;
}

function isOdd(n) {
  return !isEven(n);
}

const firstOdd = find(numbers, isOdd);
firstOdd;

const firstEven = find(numbers, isEven);
firstEven;

/**
 * The functions `isEven` and `isOdd` can be used in other array methods. They
 * are known as predicate functions.
 */

// Filter all even numbers
const evens = numbers.filter(isEven);
evens;

// Filter all odd numbers
const odds = numbers.filter(isOdd);
odds;
