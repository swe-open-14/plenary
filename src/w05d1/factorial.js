/**
 * The factorial of a number is the product of all the numbers from 1 to that
 * number. For example, factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
 * The factorial of a positive number n is given by:
 *
 * factorial of n (n!) = 1 * 2 * 3 * 4.....n
 *
 * The factorial of negative numbers do not exist and the factorial of 0 is 1.
 */

function loopFactorial(n) {
	let total = n;

	for (i = 1; i < n; i++) {
		total = total * i;
	}

	return total;
}

const loopedResult = loopFactorial(5);
loopedResult;

function recursiveFactorial(n) {
	if (n) {
		return n * recursiveFactorial(n - 1);
	} else {
		return 1;
	}
}

const recursedResult = recursiveFactorial(5);
recursedResult;
