class HeadingView {
	constructor(controller) {
		this.controller = controller;
		this.heading = document.getElementById('form');
		this.heading.innerText = controller.modelHeading;
		this.heading.addEventListener('click', controller);
	}
}

export { HeadingView };
