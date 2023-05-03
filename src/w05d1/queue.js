/**
 * Queue is a container of objects that are inserted and removed according to
 * the first-in, first-out (FIFO) principle.
 */
class Queue {
	items = [];

	get isEmpty() {
		return this.size === 0;
	}

	get length() {
		return this.items.length;
	}

	dequeue() {
		return this.items.shift();
	}

	enqueue(item) {
		this.items.push(item);
	}
}

const queue = new Queue();

// Add some values to the end of the queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.items);

// Remove the first value from the queue
let value = queue.dequeue();

value;
console.log(queue.items);
