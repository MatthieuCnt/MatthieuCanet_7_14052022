import { Event } from './utils/event.js';
import { RecipesController } from './controllers.js';
import { RecipesView } from './view.js';

class RecipesModel extends Event {
	constructor() {
		super();
		this.allRecipes = [];
		this.searchBar;
		this.filteredRecipes = [];
		this.filterIngredients = [];
		this.ingredients = [];
		this.appliances = [];
		this.ustensils = [];
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
			const recipesIngredient = recipe.ingredients;
			const recipesDescription = recipe.description.toLowerCase();

			if (filter == null) {
				this.filteredRecipes.push(recipe);
			} else if (recipesName.includes(filter)) {
				this.filteredRecipes.push(recipe);
				console.log(filter);
				console.log(this.filteredRecipes);
			} else if (recipesDescription.includes(filter)) {
				this.filteredRecipes.push(recipe);
			} else {
				recipesIngredient.some(ingredient => {
					//console.log(ingredient);
					const ingredientLower = ingredient.ingredient.toLowerCase();
					if (ingredientLower.includes(filter)) {
						this.filteredRecipes.push(recipe);
						return true;
					}
				});
			}
		});
		this.eventLoad();
		this.eventChange();
	}

	searchIngredients(filter) {
		this.filterIngredients = [];

		this.allRecipes.forEach(recipe => {
			const recipesIngredient = recipe.ingredients;
			if (filter == null) {
			} else {
				recipesIngredient.some(ingredient => {
					console.log(ingredient);

					const ingredientLower = ingredient.ingredient.toLowerCase();
					document.getElementById('openTag').style.display = 'block';
					document.getElementById('openTag').innerHTML = filter;
					if (ingredientLower.includes(filter)) {
						this.filterIngredients.push(recipe);
						//console.log(this.filterIngredients);
						return true;
					}
				});
			}
		});

		this.eventChange();
	}

	searchChevron(recipes) {
		recipes.recipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				this.ingredients.push(ingredient.ingredient);
			});
		});

		console.log(this.ingredients);
		document.getElementById('div_style').style.display = 'none';
		document.getElementById('openDrop').style.display = 'block';

		var ul = document.getElementById('ulId');

		if (ul == null) {
		} else {
			var twice = Array.from(new Set(this.ingredients));
			for (let i = 0; i < twice.length; i++) {
				var li = document.createElement('li');
				console.log(twice);
				li.appendChild(document.createTextNode(twice[i]));
				ul.appendChild(li);
			}
		}
	}

	searchChevronApp(recipes) {
		recipes.recipes.forEach(recipe => {
			this.appliances.push(recipe.appliance);
		});

		console.log(this.appliances);
		document.getElementById('div_style_appareils').style.display = 'none';
		document.getElementById('openDropApp').style.display = 'block';

		var ul = document.getElementById('ulIdApp');

		if (ul == null) {
		} else {
			var twice = Array.from(new Set(this.appliances));
			for (let i = 0; i < twice.length; i++) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(twice[i]));
				ul.appendChild(li);
			}
		}
	}

	searchChevronUst(recipes) {
		recipes.recipes.forEach(recipe => {
			recipe.ustensils.forEach(ustensils => {
				this.ustensils.push(ustensils);
			});
		});

		console.log(this.ustensils);
		document.getElementById('div_style_ustensils').style.display = 'none';
		document.getElementById('openDropUst').style.display = 'block';

		var ul = document.getElementById('ulIdUst');

		if (ul == null) {
		} else {
			var twice = Array.from(new Set(this.ustensils));
			for (let i = 0; i < twice.length; i++) {
				var li = document.createElement('li');
				li.appendChild(document.createTextNode(twice[i]));
				ul.appendChild(li);
			}
		}
	}

	eventChange() {
		this.event('change', {
			recipes: this.filteredRecipes,
		});
	}

	eventLoad() {
		this.event('load', {
			recipes: this.filteredRecipes,
		});
	}
}

export { RecipesModel };
