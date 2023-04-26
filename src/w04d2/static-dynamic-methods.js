class Person {
	static people = [];

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		Person.people.push(this);
	}

	static count() {
		return Person.people.length;
	}

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	}
}

let olive = new Person("Olive", "Rudd");
let alfred = new Person("Alfred", "Brockwell");

// Static methods are bound to the class
let numberOfPeople = Person.count();
console.log(numberOfPeople);

// Dynamic methods are bound to each instance
console.log(olive.fullName());
console.log(alfred.fullName());
