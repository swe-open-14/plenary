const X = 0;
const Y = 1;

const mario = {
	position: [0, 0], // [x, y]
	health: 100,
	armour: 100,

	move(direction) {
		// if (direction === "up") {
		// 	this.position[Y]++;
		// } else if (direction === "down") {
		// 	this.position[Y]--;
		// } else if (direction === "right") {
		// 	this.position[X]++;
		// } else if (direction === "left") {
		// 	this.position[X]--;
		// } else {
		// 	// noop
		// }
		switch (direction) {
			case "up":
				this.position[Y]++;
				break;
			case "down":
				this.position[Y]--;
				break;
			case "left":
				this.position[X]--;
				break;
			case "right":
				this.position[X]++;
				break;
			default:
				console.error("Invalid direction");
				break;
		}
	},

	takeDamage(amount) {
		if (amount >= this.health + this.armour) {
			this.armour = 0;
			this.health = 0;
		} else if (amount >= this.armour) {
			this.health -= amount - this.armour;
			this.armour = 0;
		} else {
			this.armour -= amount;
		}
	},
};
