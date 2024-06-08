import Vector from "./Vector.js";



export default class Box {
	size: number;

	pos: Vector;
	vel: Vector;
	accel: Vector;

	constructor(size: number) {
		this.size = size;

		this.pos = new Vector();
		this.vel = new Vector();
		this.accel = new Vector();
	}

	update() {
		this.vel.add(this.accel);
		this.pos.add(this.vel);
	}
}
