/**
 * There are a few different types of brackets that are used in JavaScript
 *
 * Parenthesis () - used to group expressions or declare functions.
 *
 * Brackets [] - used to define arrays and access members of an array or keys
 * of an object. Sometimes called square brackets.
 *
 * Braces {} - used to define objects.
 *
 * If you get to learn TypeScript, you'll probably also come across:
 *
 * Angle brackets <> - used to define generic types.
 */

// Examples of grouping expressions
const answer = (3 + 4) * (9 - 3);

// The `if` statement requires parenthesis around the condition.
if (answer === 42) {
  console.log("The answer is correct!");
}

// Examples of using parenthesis for declaring functions
function greet1() {
  return "Hello, World!";
}

const greet2 = function () {
  return "Hello, World!";
};

const greet3 = () => {
  return "Hello, World!";
};

/**
 * Believe it or not, the three examples above all amount to the same thing.
 *
 * `greet1` is a function declaration.
 * `greet2` is a function expression.
 * `greet3` is also function expression, but it's written differently: it's a
 * fat arrow function, but we generally just call it an arrow function.
 */

// Examples of using brackets for defining arrays
const numbers = [1, 2, 3, 4, 5];

const fruits = ["Apple", "Banana", "Orange"];

// What colour is the banana?
const banana = fruits[numbers[1]];

// Examples of using braces for defining objects
const person = {
  name: "John",
  age: 30,
};

// What's the name of the person?
person.name;

// Or we could write it this way:
person["name"];
