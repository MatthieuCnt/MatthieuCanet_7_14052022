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
		view.on('openDropIngredients', recipes =>
			model.openDropIngredients(recipes),
		);
		view.on('searchIngredients', ({ value }) =>
			model.searchIngredients(value),
		);
		
		view.on('openTag', ({ value, filter}) => model.openTag(value, filter));
		view.on('openTagAppliances', ({ value, filter}) => model.openTagAppliances(value, filter));
		view.on('openTagUstensils', ({ value, filter}) => model.openTagUstensils(value, filter));
		view.on('openDropAppliances', recipes => model.openDropAppliances(recipes));
		view.on('searchAppliances', ({ value }) =>
			model.searchAppliances(value),
		);
		view.on('openDropUstensils', recipes => model.openDropUstensils(recipes));
		view.on('searchUstensils', ({ value }) => model.searchUstensils(value));
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
