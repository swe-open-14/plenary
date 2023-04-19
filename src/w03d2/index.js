// An array of strings
const stringArray = [
	"May",
	"I",
	"have",
	"a",
	"large",
	"container",
	"of",
	"coffee",
];

// An array of numbers
const numberArray = [3, 1, 4, 1, 5, 9, 2, 6];

// An array of booleans
const booleanArray = [false, false, true, false, false, false, true, true];

// An array of different types of values
const stuffArray = [3, "I", true];

// An array of names
const names = [
	"Leonardo da Vinci",
	"Marie Curie",
	"Martin Luther King Jr.",
	"Nelson Mandela",
	"Mahatma Gandhi",
	"Winston Churchill",
	"Isaac Newton",
	"Galileo Galilei",
	"Queen Elizabeth I",
	"Julius Caesar",
	"Cleopatra",
	"Joan of Arc",
];

/**
 * Iterate over the array of names using a `for`-loop.
 *
 * Notice that we need to know the `length` of the array and we need to access
 * each element using the index `i`.
 */
for (let i = 0; i < names.length; i++) {
	const name = names[i]; // get the `i`th name
	console.log(name); // `log` the `name` to the console
}

/**
 * Iterate over the array of names using `forEach`.
 *
 * This implementation and the `for`-loop above do the same thing, but in a
 * different way.
 *
 * `forEach` expects a callback function - this is a function that we have to
 * provide, and the `forEach` method will use this function for each element
 * in turn.
 *
 * Notice that we don't need to know the `length` of the array, nor do we need
 * to access each element using an index.
 */
names.forEach((name) => {
	console.log(name);
});

/**
 * Iterate over the array using `forEach`, but with more parameters.
 *
 * Notice that this function is expecting a `value`, an `index`, and an
 * `array`. It knows nothing about what is in the array, but it knows enough
 * about how arrays work to be useful.
 */
function logIndexAndValue(value, index, array) {
	const length = array.length;

	console.log(`${index}/${length}: ${value}`);
}

names.forEach((value, index, array) => {
	logIndexAndValue(value, index, array);
});

// Or, simply:
names.forEach(logIndexAndValue);

/**
 * We can `map` values, which means that we can map each element in the array
 * to a new element in a new array.
 */
const nameLengths = names.map((value) => {
	return value.length;
});

nameLengths;

/**
 * We can then `reduce` the array of name lenghts to a sum total.
 */
const totalLentgh = nameLengths.reduce((prev, value) => {
	return prev + value;
}, 0);

nameLengths;
totalLentgh;
