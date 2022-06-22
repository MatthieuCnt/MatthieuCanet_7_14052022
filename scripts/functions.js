function ingredientsList(recipes) {
	let ingredientsArray = [];
	let l = 0;

	//Parcours de toutes les recettes
	for (let i = 0; i < recipes.length; i++) {
		//Parcours de tous les ingrédients de chaque recette
		for (let j = 0; j < recipes[i][1].ingredients.length; j++) {
			//Filtre du tableau des ingrédients
			const result = ingredientsArray.filter(
				ingredient =>
					ingredient.toLowerCase() ===
					recipes[i][1].ingredients[j].ingredient.toLowerCase(), //Permet de comparer les chaînes de caractères en minuscule
			);

			//Si l'ingrédient n'existe pas déjà dans la liste, on l'ajoute
			if (result.length == 0) {
				ingredientsArray[l] = recipes[i][1].ingredients[j].ingredient;
				l = l + 1;
			}
		}
	}
	console.log(ingredientsArray); 
	return ingredientsArray;
}

//function appareils();
function appliancesList(recipes) {
	let appliancesArray = [];
	let l = 0;

	//Parcours de toutes les appareils
	for (let i = 0; i < recipes.length; i++) {
		//Filtre du tableau des appareils
		const result = appliancesArray.filter(
			appliance =>
				appliance.toLowerCase() ===
				recipes[i][1].appliance.toLowerCase(), //Permet de comparer les chaînes de caractères en minuscule
		);

		//Si l'appareil n'existe pas déjà dans la liste, on l'ajoute
		if (result.length == 0) {
			appliancesArray[l] = recipes[i][1].appliance;
			l = l + 1;
		}
	}
	console.log(appliancesArray);
	return appliancesArray;
}

function ustensilsList(recipes) {
	let ustensilsArray = [];
	let l = 0;

	//Parcours de toutes les recettes
	for (let i = 0; i < recipes.length; i++) {
		//Parcours de tous les ustenciles de chaque recette
		for (let j = 0; j < recipes[i][1].ustensils.length; j++) {
			//Filtre du tableau des ustenciles
			const result = ustensilsArray.filter(
				ustensil =>
					ustensil.toLowerCase() ===
					recipes[i][1].ustensils[j].toLowerCase(), //Permet de comparer les chaînes de caractères en minuscule
			);

			//Si l'ustencile n'existe pas déjà dans la liste, on l'ajoute
			if (result.length == 0) {
				ustensilsArray[l] = recipes[i][1].ustensils[j];
				l = l + 1;
			}
		}
	}
	console.log(ustensilsArray);
	return ustensilsArray;
}

function showIngredients(recipes) {
	let text = '';
	if (recipes.unit != null) {
		text =
			recipes.ingredient + ': ' + recipes.quantity + ' ' + recipes.unit;
	} else if (recipes.quantity != null) {
		text = recipes.ingredient + ': ' + recipes.quantity;
	} else {
		text = recipes.ingredient;
	}
	return text;
}
