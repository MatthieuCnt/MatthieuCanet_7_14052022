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
		this.tagsAppliances = [];
		this.tagsUstensils = [];
		this.filteredrecipesbytagingredients = [];
	}

	setRecipes(recipes) {
		this.allRecipes = recipes;
		this.updatedRecipes();
	}

	searchRecipes(value, valueapp, valueust, searchFilter) {
		// j'enregistre ma recherche
		this.searchBar = searchFilter;
		this.searchFilter = value;
		this.searchFilterApp = valueapp;
		this.searchFilterUst = valueust;
		this.updatedRecipes(this.searchBar, this.searchFilter, this.searchFilterApp, this.searchFilterUst);
	}

	updatedRecipes(filter, tagFilterIng, tagFilterApp, tagFilterUst ) {
		console.log(filter);
		console.log(tagFilterIng);
		this.filteredRecipes = [];
		this.filteredRecipes1 = [];
		this.filteredRecipes2 = [];
		this.filteredRecipes3 = [];

		/* Looping through the array of all recipes. boucle1 sur filter*/
		this.allRecipes.forEach(recipe => {
			const recipesName = recipe.name.toLowerCase();
			const recipesIngredient = recipe.ingredients;
			const recipesAppliance = recipe.appliance;
			const recipesUstensil = recipe.ustensils;
			const recipesDescription = recipe.description.toLowerCase();

			if (filter == null) {
				this.filteredRecipes1.push(recipe);
			} else if (recipesName.includes(filter)) {
				this.filteredRecipes1.push(recipe);
			} else if (recipesDescription.includes(filter)) {
				this.filteredRecipes1.push(recipe);
			} else {
				// pour les ingredients
				recipesIngredient.some(ingredient => {
					const ingredientLower = ingredient.ingredient.toLowerCase();
					if (ingredientLower.includes(filter)) {
						this.filteredRecipes1.push(recipe);
						return true;
					}
				});
				// pour les appareils
				const applianceLower = recipesAppliance.toLowerCase();
					if (applianceLower.includes(filter)) {
						this.filteredRecipes1.push(recipe);
						return true;
					}
				// pour les ustencils
				recipesUstensil.some(ustensils => {
					const ustensilsLower = ustensils.toLowerCase();
					if (ustensilsLower.includes(filter)) {
						this.filteredRecipes1.push(recipe);
						return true;
					}
				});
			}
		});
		/* Looping through the array of this.filteredRecipes1. boucle2 sur tagFilterIng*/
		this.filteredRecipes1.forEach(recipe => {
			const recipesName = recipe.name.toLowerCase();
			const recipesIngredient = recipe.ingredients;
			const recipesAppliance = recipe.appliance;
			const recipesUstensil = recipe.ustensils;
			const recipesDescription = recipe.description.toLowerCase();

			if (tagFilterIng == null) {
				this.filteredRecipes2.push(recipe);
			} else if (recipesName.includes(tagFilterIng)) {
				this.filteredRecipes2.push(recipe);
			} else if (recipesDescription.includes(tagFilterIng)) {
				this.filteredRecipes2.push(recipe);
			} else {
				// pour les ingredients
				recipesIngredient.some(ingredient => {
					const ingredientLower = ingredient.ingredient.toLowerCase();
					if (ingredientLower.includes(tagFilterIng)) {
						this.filteredRecipes2.push(recipe);
						return true;
					}
				});
				// pour les appareils
				const applianceLower = recipesAppliance.toLowerCase();
					if (applianceLower.includes(tagFilterIng)) {
						this.filteredRecipes2.push(recipe);
						return true;
					}
				// pour les ustencils
				recipesUstensil.some(ustensils => {
					const ustensilsLower = ustensils.toLowerCase();
					if (ustensilsLower.includes(tagFilterIng)) {
						this.filteredRecipes2.push(recipe);
						return true;
					}
				});
			}
		});
		/* Looping through the array of this.filteredRecipes2. boucle3 sur tagFilterApp*/
		this.filteredRecipes2.forEach(recipe => {
			const recipesName = recipe.name.toLowerCase();
			const recipesIngredient = recipe.ingredients;
			const recipesAppliance = recipe.appliance;
			const recipesUstensil = recipe.ustensils;
			const recipesDescription = recipe.description.toLowerCase();

			if (tagFilterApp == null) {
				this.filteredRecipes3.push(recipe);
			} else if (recipesName.includes(tagFilterApp)) {
				this.filteredRecipes3.push(recipe);
			} else if (recipesDescription.includes(tagFilterApp)) {
				this.filteredRecipes3.push(recipe);
			} else {
				// pour les ingredients
				recipesIngredient.some(ingredient => {
					const ingredientLower = ingredient.ingredient.toLowerCase();
					if (ingredientLower.includes(tagFilterApp)) {
						this.filteredRecipes3.push(recipe);
						return true;
					}
				});
				// pour les appareils
				const applianceLower = recipesAppliance.toLowerCase();
					if (applianceLower.includes(tagFilterApp)) {
						this.filteredRecipes3.push(recipe);
						return true;
					}
				// pour les ustencils
				recipesUstensil.some(ustensils => {
					const ustensilsLower = ustensils.toLowerCase();
					if (ustensilsLower.includes(tagFilterApp)) {
						this.filteredRecipes3.push(recipe);
						return true;
					}
				});
			}
		});
		/* Looping through the array of this.filteredRecipes3. boucle4 sur tagFilterUst*/
		this.filteredRecipes3.forEach(recipe => {
			const recipesName = recipe.name.toLowerCase();
			const recipesIngredient = recipe.ingredients;
			const recipesAppliance = recipe.appliance;
			const recipesUstensil = recipe.ustensils;
			const recipesDescription = recipe.description.toLowerCase();

			if (tagFilterUst == null) {
				this.filteredRecipes.push(recipe);
			} else if (recipesName.includes(tagFilterUst)) {
				this.filteredRecipes.push(recipe);
			} else if (recipesDescription.includes(tagFilterUst)) {
				this.filteredRecipes.push(recipe);
			} else {
				// pour les ingredients
				recipesIngredient.some(ingredient => {
					const ingredientLower = ingredient.ingredient.toLowerCase();
					if (ingredientLower.includes(tagFilterUst)) {
						this.filteredRecipes.push(recipe);
						return true;
					}
				});
				// pour les appareils
				const applianceLower = recipesAppliance.toLowerCase();
					if (applianceLower.includes(tagFilterUst)) {
						this.filteredRecipes.push(recipe);
						return true;
					}
				// pour les ustencils
				recipesUstensil.some(ustensils => {
					const ustensilsLower = ustensils.toLowerCase();
					if (ustensilsLower.includes(tagFilterUst)) {
						this.filteredRecipes.push(recipe);
						return true;
					}
				});
			}
		});
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
	openDropAppliances(recipes) {
		recipes.recipes.forEach(recipe => {
			this.appliances.push(recipe.appliance);
		});
		document.getElementById('div_style_app').style.display = 'none';
		document.getElementById('openDropApp').style.display = 'block';

			var twice = Array.from(new Set(this.appliances));
			return twice;
	}
	openDropUstensils(recipes) {
		recipes.recipes.forEach(recipe => {
			recipe.ustensils.forEach(ustensils => {
				this.ustensils.push(ustensils.ustensils);
			});
		});
		document.getElementById('div_style_ust').style.display = 'none';
		document.getElementById('openDropUst').style.display = 'block';
			
		var twice = Array.from(new Set(this.ustensils));
			return twice;
		}
	
	openTag(recipes, filter) {
		this.ingredients = [];
		recipes.forEach(recipe => {
			recipe.ingredients.forEach(ingredient => {
				this.ingredients.push(ingredient.ingredient);
			});
		});
		
		var closeTag = document.getElementById('closeTagIngredients'),
			openTag = document.getElementById('openTagIngredients');

		openTag.style.display = 'block';
		openTag.innerHTML = filter;
		openTag.appendChild(closeTag);
	}

openTagAppliances(recipes, filter) {
	this.appliances = [];
	recipes.forEach(recipe => {
			this.appliances.push(recipe.appliance);
	});
	
	var closeTag = document.getElementById('closeTagAppliances'),
		openTag = document.getElementById('openTagAppliances');

	openTag.style.display = 'block';
	openTag.innerHTML = filter;
	openTag.appendChild(closeTag);
}

openTagUstensils(recipes, filter) {
	this.ustensils = [];
	recipes.forEach(recipe => {
		recipe.ustensils.forEach(ustensils => {
			this.ustensils.push(ustensils);
		});
	});
	
	var closeTag = document.getElementById('closeTagUstensils'),
		openTag = document.getElementById('openTagUstensils');

	openTag.style.display = 'block';
	openTag.innerHTML = filter;
	openTag.appendChild(closeTag);
}

eventChange() {
	this.event('change', {
		recipes: this.filteredRecipes,
		//tags_ingredients: this.tags_ingredients
	});
}
}