export class Event {
	constructor() {
		this.listenersByName = new Map();
	}

	on(name, listener) {
		let listeners = this.listenersByName.get(name);
		if (!listeners) {
			listeners = [];
			this.listenersByName.set(name, listeners);
		}
		listeners.push(listener);
	}

	off(name, listener) {
		const listeners = this.listenersByName.get(name);
		if (!listeners) {
			return;
		}

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

		listeners.forEach(listener => listener(data));
	}
}
