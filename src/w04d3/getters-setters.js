class Employee {
	#salary;

	constructor(name, salary) {
		this.name = name;
		this.#salary = salary;
	}

	// VERB - method
	getSalary() {
		return this.#salary;
	}

	// NOUN - property (this is probably what you want)
	get salary() {
		return this.#salary;
	}
}

const alice = new Employee("Olive Rudd", 1_000_000);
alice;

let salary = alice.salary;
salary;
