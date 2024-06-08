import Box from "./Box.js";
import InputManager from "./InputManager.js";
import Vector from "./Vector.js";



const canvas = document.getElementById("canvas") as (HTMLCanvasElement | undefined);
if(!canvas) throw new Error("Unable to get canvas!");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;



const ctx = canvas.getContext("2d");
if(ctx === null) throw new Error("Unable to get context!");



const box = new Box(100);
box.pos.x = (width - box.size) / 2;
box.accel = new Vector(0, 0.2);


const inputManager = new InputManager();



function draw() {
	// ctx is possibly null for some reason, will deal with later
	ctx!.fillStyle = "#000000";
	ctx!.fillRect(0, 0, width, height);


	if(inputManager.keys.Space) {
		box.vel.y = -10;
	}

	box.update();

	ctx!.fillStyle = "#ff0000";
	ctx!.fillRect(box.pos.x, box.pos.y, box.size, box.size);


	requestAnimationFrame(draw);
}



requestAnimationFrame(draw);
