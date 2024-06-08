import Box from "./Box.js";
import initGame from "./initGame.js";
import InputManager from "./InputManager.js";
import Vector from "./Vector.js";



// this needs a better name
let state = initGame();

const inputManager = new InputManager();



const box = new Box(100);
box.pos.x = (state.width - box.size) / 2;



let lastTime = 0;

function draw(timestamp: number) {
	// ctx is possibly null for some reason, will deal with later
	state.context.fillStyle = "#000000";
	state.context.fillRect(0, 0, state.width, state.height);

	const deltaTime = timestamp - lastTime;


	if(inputManager.keys.Space) {
		box.vel.y = -1.25 * deltaTime;
	}

	box.accel = new Vector(0, 0.025 * deltaTime);
	// not really sure how to handle deltaTime here... should I pass it in? how do I do math with it?
	// TODO: research on handling of deltaTime
	box.update();
	box.draw(state.context);


	lastTime = timestamp;

	requestAnimationFrame(draw);
}



requestAnimationFrame(draw);
