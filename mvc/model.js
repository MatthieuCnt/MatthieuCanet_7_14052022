import { Event } from './utils/event.js';
import { RecipesController } from './controllers.js';
//import { observe } from './utils/observer.js';

class RecipesModel extends Event {
	constructor() {
		super();
		this.allRecipes = [];
	}

	setRecipes(recipes) {
		this.allRecipes = recipes;
		this.eventChange();
	}

	eventChange() {
		this.event('change', {
			recipes: this.allRecipes,
		});
	}
}

export { RecipesModel };

console.log('model !!!');
