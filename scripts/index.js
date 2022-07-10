let ingredientsArray = [];
let ustensilsArray = [];
let appliancesArray = [];

// API REQUEST
const getRecipes = async () => {
	const response = await fetch('./modules/recipes.json');
	const data = await response.json();

	create_article(data.recipes);
};

getRecipes();

function create_article(recipes) {
	for (let i = 0; i < recipes.length; i++) {
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
	console.log(appliancesArray);

	//Create input and i(loup).
	search();
	//MVC
	/*mvc();*/
	//create btn ingredients
	ingredients();
	//create btn appliances
	appliances();
	//create btn ustencils
	ustencils();
	//create recipes paragraph
	allRecipes(recipes);
}
