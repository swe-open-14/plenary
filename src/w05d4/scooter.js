class Scooter {
	nextSerial = 1;

	constructor(station) {
		this.station = station;
		this.charge = 100;
		this.isBroken = false;
		this.serial = Scooter.nextSerial++;
		this.user = null;
	}

	getSerial() {
		return this.serial;
	}
}
