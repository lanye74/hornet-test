export default class Vector {
	x: number;
	y: number;

	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	add(vec: Vector) {
		this.x += vec.x;
		this.y += vec.y;
	}
}
