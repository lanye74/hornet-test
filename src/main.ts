import Box from "./Box.js";



const canvas = document.getElementById("canvas") as (HTMLCanvasElement | undefined);
if(!canvas) throw new Error("Unable to get canvas!");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const width = canvas.width;
const height = canvas.height;



const ctx = canvas.getContext("2d");
if(!ctx) throw new Error("Unable to get context!");



// bg
ctx.fillStyle = "#000000";
ctx.fillRect(0, 0, width, height);


const box = new Box(100);
box.x = (width - box.size) / 2;
box.y = (height - box.size) / 2;



ctx.fillStyle = "#ff0000";
ctx.fillRect(box.x, box.y, box.size, box.size);
