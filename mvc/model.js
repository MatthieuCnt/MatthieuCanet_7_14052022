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
		this.filterAppliances = [];
		this.appliances = [];
		this.filterUstensils = [];
		this.ustensils = [];
	}

	setRecipes(recipes) {
		this.allRecipes = recipes;
		this.eventLoad();
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
			} else if (recipesDescription.includes(filter)) {
				this.filteredRecipes.push(recipe);
			} else {
				recipesIngredient.some(ingredient => {
					const ingredientLower = ingredient.ingredient.toLowerCase();
					if (ingredientLower.includes(filter)) {
						this.filteredRecipes.push(recipe);
						return true;
					}
				});
			}
		});
		this.eventChange();
	}

	searchIngredients(filter) {
		this.filterIngredients = [];

		this.allRecipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				this.filterIngredients.push(ingredient.ingredient);
			});
		});
		var ul = document.getElementById('ulId');
		if (filter == null) {
		} else {
			document.getElementById('ulId').innerHTML = '';
			var twice = Array.from(new Set(this.filterIngredients));
			for (let i = 0; i < twice.length; i++) {
				const ingredientLower = twice[i].toLowerCase();
				if (ingredientLower.includes(filter)) {
					var li = document.createElement('li');
					li.addEventListener('click', function () {
						var cross = document.getElementById('roundCross'),
							openTag = document.getElementById('openTag');

						openTag.style.display = 'block';
						openTag.innerHTML = twice[i];
						openTag.appendChild(cross);
					});
					li.appendChild(document.createTextNode(twice[i]));
					ul.appendChild(li);
				}
			}
		}
		this.eventChange();
	}

	searchAppliances(filter) {
		this.filterAppliances = [];

		this.allRecipes.forEach(recipe => {
			this.filterAppliances.push(recipe.appliance);
			var ul = document.getElementById('ulIdApp');
			if (filter == null) {
			} else {
				document.getElementById('ulIdApp').innerHTML = '';
				var twice = Array.from(new Set(this.filterAppliances));
				for (let i = 0; i < twice.length; i++) {
					const ingredientLower = twice[i].toLowerCase();
					if (ingredientLower.includes(filter)) {
						var li = document.createElement('li');
						li.addEventListener('click', function () {
							document.getElementById('openTag').style.display =
								'block';
						});
						li.appendChild(document.createTextNode(twice[i]));
						ul.appendChild(li);
					}
				}
			}
			this.eventChange();
		});
	}

	searchUstensils(filter) {
		this.filterUstensils = [];

		this.allRecipes.forEach(recipe => {
			recipe.ustensils.forEach(ustensil => {
				this.filterUstensils.push(ustensil);
			});
		});
		var ul = document.getElementById('ulIdUst');
		if (filter == null) {
		} else {
			document.getElementById('ulIdUst').innerHTML = '';
			var twice = Array.from(new Set(this.filterUstensils));
			for (let i = 0; i < twice.length; i++) {
				const ingredientLower = twice[i].toLowerCase();
				if (ingredientLower.includes(filter)) {
					var li = document.createElement('li');
					li.appendChild(document.createTextNode(twice[i]));
					ul.appendChild(li);
				}
			}
		}
		this.eventChange();
	}
	searchChevron(recipes) {
		recipes.recipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				this.ingredients.push(ingredient.ingredient);
			});
		});
		document.getElementById('div_style').style.display = 'none';
		document.getElementById('openDrop').style.display = 'block';

		var ul = document.getElementById('ulId');

		if (ul == null) {
		} else {
			var twice = Array.from(new Set(this.ingredients));
			for (let i = 0; i < twice.length; i++) {
				var li = document.createElement('li');
				li.addEventListener('click', function () {
					document.getElementById('openTag').style.display = 'block';
					document.getElementById('openTag').innerHTML = this.click;
				});
				li.appendChild(document.createTextNode(twice[i]));
				ul.appendChild(li);
			}
		}
	}

	searchChevronApp(recipes) {
		recipes.recipes.forEach(recipe => {
			this.appliances.push(recipe.appliance);
		});
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
