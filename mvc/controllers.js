import { RecipesModel } from './model.js';
import { RecipesView } from './view.js';

export class RecipesController {
	/**
	 * @param { RecipesModel } model
	 * @param { RecipesView } view
	 */
	constructor(model, view) {
		this.model = model;
		this.view = view;
		/* Listening for the change event and then rendering the recipes. */
		model.on('change', data => view.render(data));
		view.on('searchBar', ({ value, valueapp, valueust, searchFilter }) => model.searchRecipes(value, valueapp, valueust, searchFilter));
		view.on('openDropIngredients', recipes => model.openDropIngredients(recipes));
		view.on('openDropAppliances', recipes => model.openDropAppliances(recipes));
		view.on('openDropUstensils', recipes => model.openDropUstensils(recipes));
	}

	load() {
		/* Fetching the data from the json file. */
		fetch('/data/recipes.json')
			.then(res => res.json())
			.then(({ recipes }) => {
				console.log(recipes);
				this.model.setRecipes(recipes);
			})
			.catch(error => {
				console.error(error);
			});
	}
}
