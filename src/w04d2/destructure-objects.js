let person = {
	firstName: "Olive",
	lastName: "Rudd",
	emailAddress: "o.rudd@example.com",
};

let { emailAddress, ...names } = person;

emailAddress;
names;

let { emailAddress: email } = person;

email;

let { id, username = "anonymous" } = person;

id;
username;

let samePerson = person;
let { ...copyPerson } = person;

console.log(samePerson === person);
console.log(copyPerson === person);
