/**
 * Stack is a container of objects that are inserted and removed according to
 * the last-in, first-out (LIFO) principle.
 */
class Stack {
	// Normally private, but exposed so that we can inspect the stack
	items = [];

	get isEmpty() {
		return this.size === 0;
	}

	get size() {
		return this.items.length;
	}

	pop() {
		return this.items.pop();
	}

	push(item) {
		this.items.push(item);
	}
}

const stack = new Stack();

// Add some values onto the stack
stack.push(1);
stack.push(2);
stack.push(3);

// Inspect the stack (this would normally be private)
console.log(stack.items);

// Remove the top value from the stack
let value = stack.pop();

value;
console.log(stack.items);

/**
 * The stack operates identically to an array, so why create a Stack class?
 *
 * By encapsulating the implementation and reducing the interface to the
 * properties and methods expected of a stack, we can offer the developer an
 * improved experience and ensure the stack is used as intended.
 */
