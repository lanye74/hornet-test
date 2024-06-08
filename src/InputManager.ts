export default class InputManager {
	keys: InputManagerKeyState;

	constructor() {
		this.keys = {};

		window.addEventListener("keydown", (event: KeyboardEvent) => {this.updateState(event, true)});
		window.addEventListener("keyup", (event: KeyboardEvent) => {this.updateState(event, false)});
	}

	updateState(event: KeyboardEvent, isKeyPressed: boolean) {
		event.preventDefault();

		this.keys[event.code] = isKeyPressed;
	}
}



type InputManagerKeyState = {
	[key: string]: boolean;
}
