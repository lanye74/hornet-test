import Vector from "./Vector.js";



export default function initGame(): GameState {
	let possiblyUndefinedCanvas = document.getElementById("canvas") as (HTMLCanvasElement | undefined);
	if(!possiblyUndefinedCanvas) throw new Error("Unable to get canvas!");

	let canvas = possiblyUndefinedCanvas;


	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	let width = canvas.width;
	let height = canvas.height;


	const possiblyNullContext = canvas.getContext("2d");
	if(possiblyNullContext === null) throw new Error("Unable to get context!");

	let context = possiblyNullContext;



	return {
		canvas,
		context,
		width,
		height
	};
}



type GameState = {
	canvas: HTMLCanvasElement;
	context: CanvasRenderingContext2D;
	// for easy access
	width: number;
	height: number;
}
