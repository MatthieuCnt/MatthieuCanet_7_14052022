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
		this.updatedRecipes();
	}

	updatedRecipes() {
		this.filteredRecipes = [];
		this.allRecipes.forEach(recipe => {
			const recipesName = recipe.name.toLowerCase(); // chercher dans les recette si value est dans le titre ou la description ou les ingrédients (this.search)
			if (recipesName.includes(this.searchBar)) {
				this.filteredRecipes.push(this.searchBar);

				console.log(this.searchBar);
			}

			this.filteredRecipes.push(recipe);
		});
		this.RemoveRender();
		this.eventChange();
	}

	RemoveRender() {
		RecipesView.replace();
	}

	eventChange() {
		this.event('change', {
			recipes: this.filteredRecipes,
		});
	}
}

export { RecipesModel };
