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

		view.on('searchBar', ({ value }) => model.searchRecipes(value));
		view.on('openDropIngredients', recipes =>
			model.openDropIngredients(recipes),
		);
		view.on('searchIngredients', ({ value }) =>
			model.searchIngredients(value),
		),
			view.on('openTag', ({ recipes }) => model.openTag(recipes));
		view.on('openAppliances', recipes => model.openAppliances(recipes));
		view.on('searchAppliances', ({ value }) =>
			model.searchAppliances(value),
		);
		view.on('openUstensils', recipes => model.openUstensils(recipes));
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
