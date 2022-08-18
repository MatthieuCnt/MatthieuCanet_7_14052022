import { RecipesModel } from './model.js';
import { RecipesView } from './view.js';

/**
 * @param { RecipesModel } model
 * @param { RecipesView } view
 */
class RecipesController {
	constructor(model, view) {
		this.model = model;
		this.view = view;

		/* Listening for a change event on the model and then calling the view's render method with the data. */
		model.on('load', data => view.renderHeader(data));
		model.on('change', data => view.render(data));

		view.on('searchBar', ({ value }) => model.searchRecipes(value));
		view.on('searchChevron', recipes => model.searchChevron(recipes));
		view.on('searchIngredients', ({ value }) =>
			model.searchIngredients(value),
		);
		view.on('searchChevronApp', recipes => model.searchChevronApp(recipes));
		view.on('searchAppliances', ({ value }) =>
			model.searchAppliances(value),
		);
		view.on('searchChevronUst', recipes => model.searchChevronUst(recipes));
		view.on('searchUstensils', ({ value }) => model.searchUstensils(value));
	}

	load() {
		fetch('/data/recipes.json')
			.then(res => res.json())
			.then(({ recipes }) => {
				console.log(recipes);
				this.model.setRecipes(recipes);
			});
	}
}

export { RecipesController };
