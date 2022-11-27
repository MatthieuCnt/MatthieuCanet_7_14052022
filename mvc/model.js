import { Event } from './utils/event.js';
export class RecipesModel extends Event {
	constructor() {
		/* Calling the constructor of the parent class.*/
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
		this.filterList = [];
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
		this.filteredRecipes = [];
		this.filteredRecipes1 = [];
		this.filteredRecipes2 = [];
		this.filteredRecipes3 = [];
		/* Looping through the array of all recipes. boucle1 sur filter*/
		for(let i = 0; i < this.allRecipes.length; i++){
			var recipe = this.allRecipes[i];
			if (filter == null) {
				this.filteredRecipes1.push(recipe);
			} else if (recipe.name.toLowerCase().includes(filter) || recipe.description.toLowerCase().includes(filter)) {
				this.filteredRecipes1.push(recipe);
			} else {
				// pour les ingredients
				recipe.ingredients.some(ingredient => {
					if (ingredient.ingredient.toLowerCase().includes(filter)) {
						this.filteredRecipes1.push(recipe);
						return true;
					}
				});
				// pour les appareils
					if (recipe.appliance.toLowerCase().includes(filter)) {
						this.filteredRecipes1.push(recipe);
						return true;
					}
				// pour les ustencils
				recipe.ustensils.some(ustensils => {
					if (ustensils.toLowerCase().includes(filter)) {
						this.filteredRecipes1.push(recipe);
						return true;
					}
				});
			}
		};
		/* Looping through the array of this.filteredRecipes1. boucle2 sur tagFilterIng*/
		//this.filteredRecipes1.forEach(recipe => {
		for(let i = 0; i < this.filteredRecipes1.length; i++){
			var recipe = this.filteredRecipes1[i];
			if (tagFilterIng == null) {
				this.filteredRecipes2.push(recipe);
			} else if (recipe.name.toLowerCase().includes(tagFilterIng) || recipe.description.toLowerCase().includes(tagFilterIng)) {
				this.filteredRecipes2.push(recipe);
			} else {
				// pour les ingredients
				recipe.ingredients.some(ingredient => {
					if (ingredient.ingredient.toLowerCase().includes(tagFilterIng)) {
						this.filteredRecipes2.push(recipe);
						return true;
					}
				});
			}
		};
		/* Looping through the array of this.filteredRecipes2. boucle3 sur tagFilterApp*/
		
		for(let i = 0; i < this.filteredRecipes2.length; i++){
			var recipe = this.filteredRecipes2[i];
			if (tagFilterApp == null) {
				this.filteredRecipes3.push(recipe);
			} else if ( recipe.name.toLowerCase().includes(tagFilterApp) || recipe.description.toLowerCase().includes(tagFilterApp) || recipe.appliance.toLowerCase().includes(tagFilterApp)) {
				this.filteredRecipes3.push(recipe);
			} 
		};
		/* Looping through the array of this.filteredRecipes3. boucle4 sur tagFilterUst*/
		for(let i = 0; i < this.filteredRecipes3.length; i++){
			var recipe = this.filteredRecipes3[i];
			if (tagFilterUst == null) {
				this.filteredRecipes.push(recipe);
			} else if (recipe.name.toLowerCase().includes(tagFilterUst) || recipe.description.toLowerCase().includes(tagFilterUst)) {
				this.filteredRecipes.push(recipe);
			} else {recipe.ustensils.some(ustensils => {
					if (ustensils.toLowerCase().includes(tagFilterUst)) {
						this.filteredRecipes.push(recipe);
						return true;
					}
				});
			}
		};
		this.eventChange();
	}
openDropIngredients(recipes) {
	recipes.recipes.forEach(recipe => {
		recipe.ingredients.forEach(ingredient => {
			this.ingredients.push(ingredient.ingredient);
		});
	});
}

openDropAppliances(recipes) {
	recipes.recipes.forEach(recipe => {
		this.appliances.push(recipe.appliance);
	});
}

openDropUstensils(recipes) {
	recipes.recipes.forEach(recipe => {
		recipe.ustensils.forEach(ustensils => {
			this.ustensils.push(ustensils.ustensils);
		});
	});
}

eventChange() {
	this.event('change', {
		recipes: this.filteredRecipes,
		tagsIngredients: this.tagsIngredients,
		tagsAppliances: this.tagsAppliances,
		tagsUstensils: this.tagsUstensils,
		});
	}
}