import { RecipesModel } from './model.js';
import { RecipesController } from './controllers.js';
import { RecipesView } from './view.js';

function main() {
	const model = new RecipesModel();
	const view = new RecipesView();
	const controller = new RecipesController(model, view);
	controller.load();
}

main();
