import { RecipesModel } from './model.js';
import { RecipesController } from './controllers.js';
import { RecipesView } from './view.js';

function main() {
	const model = new RecipesModel();
	const view = new RecipesView();
	const controller = new RecipesController(model, view);
	controller.load();

	//const app = new controller(new model(), new view());
}

main();

let ingredientsArray = [];
let ustensilsArray = [];
let appliancesArray = [];

/*for (let i = 0; i < recipes.length; i++) {
	recipes[i].ingredients.forEach(Element => {
		ingredientsArray.push(Element.ingredient);
	});
	recipes[i].ustensils.forEach(Element => {
		ustensilsArray.push(Element);
	});
	appliancesArray.push(recipes[i].appliance);
}

ingredientsArray = sort(ingredientsArray);
console.log(ingredientsArray);

ustensilsArray = sort(ustensilsArray);
console.log(ustensilsArray);

appliancesArray = sort(appliancesArray);
console.log(appliancesArray);*/
