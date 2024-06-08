import Vector from "./Vector.js";



export default class Box {
	size: number;

	pos: Vector;
	vel: Vector;
	accel: Vector;

	grounded!: boolean;

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

	jump(deltaTime: number) {
		if(this.grounded) {
			console.log(deltaTime)
			this.vel.y = -1.5 * deltaTime;
		}
	}

	update(deltaTime: number) {
		this.vel.add(this.accel);


		const max = deltaTime * 200;

		// small sanity check
		if(Math.abs(this.vel.x) > max) this.vel.x = max;
		if(Math.abs(this.vel.y) > max) this.vel.y = max;

		this.pos.add(this.vel);
	}
}
