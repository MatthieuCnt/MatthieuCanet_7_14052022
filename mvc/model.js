import { Event } from './utils/event.js';
import { RecipesController } from './controllers.js';
import { RecipesView } from './view.js';

class RecipesModel extends Event {
	constructor() {
		super();
		this.allRecipes = [];
		this.searchBar;
		this.filteredRecipes = [];
	}

	setRecipes(recipes) {
		this.allRecipes = recipes;
		this.updatedRecipes();
	}

	searchRecipes(value) {
		// j'enregistre ma recherche
		this.searchBar = value;
		this.updatedRecipes(this.searchBar);
	}

	updatedRecipes(filter) {
		this.filteredRecipes = [];
		/* Looping through the array of recipes. */
		this.allRecipes.forEach(recipe => {
			const recipesName = recipe.name.toLowerCase();
			/* Checking if the recipe name includes the search bar value. */
			if (filter == null) {
				this.filteredRecipes.push(recipe);
			} else if (recipesName.includes(filter)) {
				/* Pushing the value of the search bar into the filteredRecipes array. */
				this.filteredRecipes.push(recipe);
				console.log(filter);
				console.log(this.filteredRecipes);
			}
		});

		this.eventChange();
	}

	eventChange() {
		this.event('change', {
			recipes: this.filteredRecipes,
		});
	}
}

export { RecipesModel };
