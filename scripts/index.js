import { recipes } from '../modules/recipes.js';
let recipesArray = Object.entries(recipes);

console.log(recipesArray);

let ingredientsArray = [];

for (let i = 0; i < recipes.length; i++) {
	//addIngredient(recipes[i].ingredients);
	recipes[i].ingredients.forEach(ingredient => {
		console.log(ingredient.name);
		ingredientsArray.push(ingredient.ingredient);
	});
}
console.log(ingredientsArray);
console.log(recipes);

let ustensilsArray = [];

for (let i = 0; i < recipes.length; i++) {
	//addUstensil(recipes[i].ustensils);
	recipes[i].ustencils.forEach(ustencil => {
		console.log(ustencil.name);
		ustensilsArray.push(ustensils);
	})
}
console.log(ustensilsArray);

let appliancesArray = [];

for (let i = 0; i < recipes.length; i++) {
	//addAppliances(recipes[i].appliances);
	recipes[i].appliances.forEach(appliance => {
		console.log(appliance.name);
		appliancesArray.push(appliance);
	})
}


// INSERT ELEMENT IN HTML
function create_article(recipesArray) {
	//ingredientArray

	for (let i = 0; i < recipesArray.length; i++) {
		// boucle ingredients / ustencils / appareils
		const article = document.createElement('article');
		article.classList.add('recipes');
		article.id = 'recipes' + i;
		document.querySelector('.all_recipes').appendChild(article);

		const recipes_img = document.createElement('img');
		recipes_img.classList.add('recipes_img');
		recipes_img.id = 'recipes_img' + i;
		document.getElementById('recipes' + i).appendChild(recipes_img);

		const div_recipes = document.createElement('div');
		div_recipes.classList.add('recipes_text');
		div_recipes.id = 'recipes_text' + i;
		document.getElementById('recipes' + i).appendChild(div_recipes);

		const div_first_part = document.createElement('div');
		div_first_part.classList.add('first_part');
		div_first_part.id = 'div_first_part' + i;
		document.getElementById('recipes_text' + i).appendChild(div_first_part);

		const recipes_title = document.createElement('h1');
		recipes_title.classList.add('recipes_title');
		recipes_title.innerHTML = recipesArray[i][1].name;
		document
			.getElementById('div_first_part' + i)
			.appendChild(recipes_title);

		const recipes_clock = document.createElement('i');
		recipes_clock.className = 'far fa-clock';
		recipes_clock.innerHTML = recipesArray[i][1].time + ' min';
		document
			.getElementById('div_first_part' + i)
			.appendChild(recipes_clock);

		const div_second_part = document.createElement('div');
		div_second_part.classList.add('second_part');
		div_second_part.id = 'recipes_ingredient' + i;
		document
			.getElementById('recipes_text' + i)
			.appendChild(div_second_part);

		const ul_ingredients = document.createElement('ul');
		ul_ingredients.id = 'list_ingredient' + i;
		ul_ingredients.classList.add('list_ingredient');
		document
			.getElementById('recipes_ingredient' + i)
			.appendChild(ul_ingredients);

		for (let j = 0; j < recipesArray[i][1].ingredients.length; j++) {
			const ingredients = document.createElement('li');
			ingredients.classList.add('ingredients_recipes');
			ingredients.innerHTML = showIngredients(
				recipesArray[i][1].ingredients[j],
			);
			document
				.getElementById('list_ingredient' + i)
				.appendChild(ingredients);
		}
		const description = document.createElement('p');
		description.classList.add('description_recipes');
		description.innerText = recipesArray[i][1].description;
		document
			.getElementById('recipes_ingredient' + i)
			.appendChild(description);
	}
}

create_article(recipesArray);

ingredientsList(recipesArray);

ustensilsList(recipesArray);

appliancesList(recipesArray);
