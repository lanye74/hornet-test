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

	draw(context: CanvasRenderingContext2D) {
		context.fillStyle = "#ff0000";
		context.fillRect(this.pos.x, this.pos.y, this.size, this.size);
	}

	update() {
		this.vel.add(this.accel);
		this.pos.add(this.vel);
	}
}
