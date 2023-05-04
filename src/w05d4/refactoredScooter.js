class Scooter {
	static #nextSerial = 1;

	#station;

	#charge = 100;
	#isBroken = false;
	#serial = Scooter.#nextSerial++;
	#user = null;

	constructor(station) {
		this.#station = station;
	}

	get charge() {
		return this.#charge;
	}

	get isBroken() {
		return this.#isBroken;
	}

	get serial() {
		return this.#serial;
	}

	get station() {
		return this.#station;
	}

	get user() {
		return this.#user;
	}
}

let scooter1 = new Scooter("Euston");
let scooter2 = new Scooter("Marylebone");
let scooter3 = new Scooter("Paddington");

scooter3;

const { charge, serial, station } = scooter3;
charge;
station;
serial;

scooter3.charge = 50;
console.log(scooter3.charge);
