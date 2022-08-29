export class Event {
	constructor() {
		/* Creating a new Map object and assigning it to the `listenersByName` property of the object. */
		this.listenersByName = new Map();
	}
	on(name, listener) {
		let listeners = this.listenersByName.get(name);
		if (!listeners) {
			listeners = [];
			/* Adding a new key-value pair to the Map object. */
			this.listenersByName.set(name, listeners);
		}
		listeners.push(listener);
	}

	off(name, listener) {
		/* Getting the value of the key `name` from the Map object. */
		const listeners = this.listenersByName.get(name);
		if (!listeners) {
			return;
		}
		/* Finding the index of the element in the array that is equal to the `listener` parameter. */
		const removeIndex = listeners.findIndex(el => el === listener);
		if (removeIndex !== -1) {
			listeners.splice(removeIndex, 1);
		}
	}
	event(name, data) {
		const listeners = this.listenersByName.get(name);
		if (!listeners) {
			return;
		}
		/* Calling the function that was passed in as a parameter to the `on` method. */
		listeners.forEach(listener => listener(data));
	}
}
