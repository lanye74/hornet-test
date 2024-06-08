import Box from "./Box.js";
import initGame from "./initGame.js";
import InputManager from "./InputManager.js";
import Vector from "./Vector.js";



// this needs a better name
let game = initGame();

const inputManager = new InputManager();



const box = new Box(100);
box.pos.x = (game.width - box.size) / 2;



let lastTime = 0;

function draw(timestamp: number) {
	// ctx is possibly null for some reason, will deal with later
	game.context.fillStyle = "#000000";
	game.context.fillRect(0, 0, game.width, game.height);

	const deltaTime = timestamp - lastTime;


	if(inputManager.keys.Space) {
		box.jump(deltaTime);
	}

	box.accel = new Vector(0, 0.025 * deltaTime);
	// not really sure how to handle deltaTime here... should I pass it in? how do I do math with it?
	// TODO: research on handling of deltaTime
	box.update(deltaTime);


	box.grounded = false;

	// temporary collision
	if(box.pos.y + box.size > game.height) {
		box.pos.y = game.height - box.size;

		// this is really bad
		box.grounded = true;
	}


	box.draw(game.context);


	lastTime = timestamp;

	requestAnimationFrame(draw);
}



requestAnimationFrame(draw);
