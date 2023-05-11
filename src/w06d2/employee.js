class Employee {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.displayName = `${firstName} ${lastName}`;
		this.username = `${firstName[0]}${lastName}`.toLowerCase();
	}
}

module.exports = Employee;
