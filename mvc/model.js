import { Event } from './utils/event.js';
import { match, tiny } from './utils/utils.js';

export class RecipesModel extends Event {
	constructor() {
		/* Calling the constructor of the parent class. */
		super();
		this.allRecipes = [];
		this.filteredRecipes = [];
		this.ingredients = [];
		this.appliances = [];
		this.ustensils = [];
		this.filters = { ingredients: [], appliances: [], ustensils: [] };
		this.filteredRecipesByTag = {
			ingredients: [],
			appliances: [],
			ustensils: [],
		};
		this.tagsIngredients = [];
		this.filteredrecipesbytagingredients = [];
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
		/*if (this.tagsIngredients == null) {
			this.tagsIngredients.forEach(recipe => {
				recipe.ingredients.forEach(ingredient => {
					this.filters.ingredients.push(ingredient.ingredient);
				});
			});
			if (ingredientLower.includes(filter)) {
				this.filteredRecipes.push(recipe);
				return true;
			}*/
		// créer tableau filteredrecipesbytagingredients
		// si on tableau this.tags_ingredients n'est pas vide -> je boucle sur this.tags_ingredients pour chercher si l'ingrédient est dans le tableau filteredrecipes
		// this.filteredRecipes = filteredrecipesbytagingredients
		this.eventChange();
	}

	searchIngredients(filter) {
		this.filters.ingredients = [];

		this.allRecipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				this.filters.ingredients.push(ingredient.ingredient);
			});
		});
		var ul = document.getElementById('listIngredients');
		if (filter == null) {
		} else {
			document.getElementById('listIngredients').innerHTML = '';
			var twice = Array.from(new Set(this.filters.ingredients));
			for (let i = 0; i < twice.length; i++) {
				const ingredientLower = twice[i].toLowerCase();
				if (ingredientLower.includes(filter)) {
					/*li.addEventListener('click', function () {
						var closeTag = document.getElementById(
								'closeTagIngredients',
							),
							openTag =
								document.getElementById('openTagIngredients');

						openTag.style.display = 'block';
						openTag.innerHTML = li[i];
						openTag.appendChild(closeTag);
					});
					li.appendChild(document.createTextNode(twice[i]));
					ul.appendChild(li);*/
				}
			}
		}
		this.eventChange();
	}

	searchAppliances(filter) {
		this.filters.appliances = [];
		this.allRecipes.forEach(recipe => {
			this.filters.appliances.push(recipe.appliance);
			var ul = document.getElementById('listAppliances');
			if (filter == null) {
			} else {
				document.getElementById('listAppliances').innerHTML = '';
				var twice = Array.from(new Set(this.filters.appliances));
				for (let i = 0; i < twice.length; i++) {
					const ingredientLower = twice[i].toLowerCase();
					if (ingredientLower.includes(filter)) {
						var li = document.createElement('li');
						li.addEventListener('click', function () {
							var closeTag =
									document.getElementById(
										'closeTagAppliance',
									),
								openTag =
									document.getElementById('openTagAppliance');

							openTag.style.display = 'block';
							openTag.innerHTML = twice[i];
							openTag.appendChild(closeTag);
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
				this.filters.ustensils.push(ustensil);
			});
		});
		var ul = document.getElementById('listUstensils');
		if (filter == null) {
		} else {
			document.getElementById('listUstensils').innerHTML = '';
			var twice = Array.from(new Set(this.filters.ustensils));
			for (let i = 0; i < twice.length; i++) {
				const ingredientLower = twice[i].toLowerCase();
				if (ingredientLower.includes(filter)) {
					var li = document.createElement('li');
					li.addEventListener('click', function () {
						var closeTagUstensils =
								document.getElementById('closeTagUstensils'),
							openTagUstensils =
								document.getElementById('openTagUstensils');

						openTagUstensils.style.display = 'block';
						openTagUstensils.innerHTML = twice[i];
						openTagUstensils.appendChild(closeTagUstensils);
					});
					li.appendChild(document.createTextNode(twice[i]));
					ul.appendChild(li);
				}
			}
		}
		this.eventChange();
	}
	openDropIngredients(recipes) {
		recipes.recipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				this.ingredients.push(ingredient.ingredient);
			});
		});
		document.getElementById('div_style').style.display = 'none';
		document.getElementById('openDrop').style.display = 'block';
		var twice = Array.from(new Set(this.ingredients));

		return twice;
	}
	openAppliances(recipes) {
		recipes.recipes.forEach(recipe => {
			this.appliances.push(recipe.appliance);
		});
		document.getElementById('div_style_appareils').style.display = 'none';
		document.getElementById('openDropApp').style.display = 'block';

		var ul = document.getElementById('listAppliances');

		if (ul == null) {
		} else {
			var twice = Array.from(new Set(this.appliances));
			for (let i = 0; i < twice.length; i++) {
				var li = document.createElement('li');
				li.addEventListener('click', function () {
					var openTagAppliances =
							document.getElementById('openTagAppliances'),
						closeTagAppliances =
							document.getElementById('closeTagAppliances');

					openTagAppliances.style.display = 'block';
					openTagAppliances.innerHTML = this.click;
					console.log(this.click);
					openTagAppliances.appendChild(closeTagAppliances);
				});
				li.appendChild(document.createTextNode(twice[i]));
				ul.appendChild(li);
			}
		}
	}
	openUstensils(recipes) {
		recipes.recipes.forEach(recipe => {
			recipe.ustensils.forEach(ustensils => {
				this.ustensils.push(ustensils);
			});
		});
		document.getElementById('div_style_ustensils').style.display = 'none';
		document.getElementById('openDropUst').style.display = 'block';

		var ul = document.getElementById('listUstensils');

		if (ul == null) {
		} else {
			var twice = Array.from(new Set(this.ustensils));
			for (let i = 0; i < twice.length; i++) {
				var li = document.createElement('li');
				li.addEventListener('click', function () {
					var openTagUstensils =
							document.getElementById('openTagUstensils'),
						closeTagUstensils =
							document.getElementById('closeTagUstensils');

					openTagUstensils.style.display = 'block';
					openTagUstensils.innerHTML = this.click;
					console.log(this.click);
					openTagUstensils.appendChild(closeTagUstensils);
				});
				li.appendChild(document.createTextNode(twice[i]));
				ul.appendChild(li);
			}
		}
	}

	openTag(recipes) {
		this.tagsIngredients = [];
		recipes.recipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				/* Pushing the ingredient into the ingredients array. */
				this.ingredients.push(ingredient.ingredient);
			});
		});
		console.log(this.ingredients);
		var closeTag = document.getElementById('closeTagIngredients'),
			openTag = document.getElementById('openTagIngredients');

		openTag.style.display = 'block';
		openTag.innerHTML = li[i];
		openTag.appendChild(closeTag);

		li.appendChild(document.createTextNode(twice[i]));
		ul.appendChild(li);
	}

	eventChange() {
		this.event('change', {
			recipes: this.filteredRecipes,
			//tags_ingredients: this.tags_ingredients
		});
	}
}
