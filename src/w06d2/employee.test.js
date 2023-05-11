const { beforeEach, describe, expect, it, test } = require("@jest/globals");
const Employee = require("./employee.js");

// An employee is instantiated with two arguments: their first and last names, e.g., "Olive" and "Rudd"
// An employee has a display name, being their first and last name, e.g., "Olive Rudd"
// An employee has a username, being their first inital and lastname: e.g., "orudd"

describe("Employee", () => {
	let employee;

	beforeEach(() => {
		employee = new Employee("Olive", "Rudd");
	});

	it("is constructed with a first and last name", () => {
		expect(employee).toBeInstanceOf(Employee);
	});

	describe("first name", () => {
		it("is initialised during construction", () => {
			const { firstName } = employee;

			expect(firstName).toBe("Olive");
		});
	});

	describe("last name", () => {
		it("is initialised during construction", () => {
			const { lastName } = employee;

			expect(lastName).toBe("Rudd");
		});
	});

	it("has a `displayName` property", () => {
		expect(employee).toHaveProperty("displayName");
	});

	describe("displayName", () => {
		it("is derived from the employee's first and last name", () => {
			const { displayName } = employee;

			expect(displayName).toBe("Olive Rudd");
		});
	});

	it("has a `username` property", () => {
		expect(employee).toHaveProperty("username");
	});

	describe("username", () => {
		it("is derived from the employee's first and last name", () => {
			const { username } = employee;

			expect(username).toBe("orudd");
		});
	});
});
