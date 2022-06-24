/* Importing the recipes from the recipes.js file. */
import { recipes } from '../modules/recipes.js';
let recipesArray = Object.entries(recipes);
let ingredientsArray = [];
/* Looping through the recipes array. */
for (let i = 0; i < recipes.length; i++) {
	/* Looping through the ingredients array and pushing each ingredient to the ingredientsArray. */
	recipes[i].ingredients.forEach(ingredient => {
		ingredientsArray.push(ingredient.ingredient);
	});
}
console.log(recipes);
/* Sorting the ingredientsArray alphabetically. */
ingredientsArray = sort(ingredientsArray);
console.log(ingredientsArray);

let ustensilsArray = [];
/* Looping through the recipes array. */
for (let i = 0; i < recipes.length; i++) {
	/* Looping through the ustensils array and pushing each ustensil to the ustensilsArray. */
	recipes[i].ustensils.forEach(ustensil => {
		ustensilsArray.push(ustensil);
	});
}
ustensilsArray = sort(ustensilsArray);
console.log(ustensilsArray);

let appliancesArray = [];
/* Looping through the recipes array. */
for (let i = 0; i < recipes.length; i++) {
	/* Pushing the appliance property of each recipe to the appliancesArray. */
	appliancesArray.push(recipes[i].appliance);
}
appliancesArray = sort(appliancesArray);
console.log(appliancesArray);
/* Creating the HTML elements and appending them to the DOM. */
function create_article(recipesArray) {
	const search_input = document.createElement('input');
	search_input.classList.add('search_input');
	search_input.type = 'text';
	search_input.placeholder = 'Rechercher une recette';
	document.getElementById('form').appendChild(search_input);

	const fas_search = document.createElement('i');
	fas_search.className = 'fas fa-search';
	document.querySelector('.search_input').appendChild(fas_search);

	const filter_style = document.createElement('div');
	filter_style.className = 'filter_style ingredients';
	filter_style.id = 'div_style';
	document.getElementById('section').appendChild(filter_style);

	const filter_style_inside = document.createElement('div');
	filter_style_inside.classList.add('filter_style_inside');
	document.getElementById('div_style').appendChild(filter_style_inside);

	const filter_input = document.createElement('input');
	filter_input.className = 'filter_input ingredients';
	filter_input.placeholder = 'Ingrédients';
	document.querySelector('.filter_style_inside').appendChild(filter_input);

	const chevron = document.createElement('i');
	chevron.className = 'fas fa-chevron-down';
	chevron.addEventListener('click', function () {
		showDropDownIngredients(ingredientsArray);
	});
	document.querySelector('.filter_style_inside').appendChild(chevron);

	const ul = document.createElement('ul');
	ul.className = 'dropdown_ing';
	ul.id = 'ulId';
	document.querySelector('.filter_style').appendChild(ul);

	const filter_style_appareils = document.createElement('div');
	filter_style_appareils.className = 'filter_style appareils';
	filter_style_appareils.id = 'div_style_appareils';
	document.getElementById('section').appendChild(filter_style_appareils);

	const filter_style_inside_app = document.createElement('div');
	filter_style_inside_app.classList.add('filter_style_inside');
	filter_style_inside_app.id = 'filterInside';
	document
		.getElementById('div_style_appareils')
		.appendChild(filter_style_inside_app);

	const filter_input_app = document.createElement('input');
	filter_input_app.className = 'filter_input appareils';
	filter_input_app.placeholder = 'Appareils';
	document.getElementById('filterInside').appendChild(filter_input_app);

	const chevron_app = document.createElement('i');
	chevron_app.className = 'fas fa-chevron-down ';
	document.getElementById('filterInside').appendChild(chevron_app);

	const ul_app = document.createElement('ul');
	ul_app.className = 'dropdown_app';
	document.getElementById('div_style_appareils').appendChild(ul_app);

	const li_app = document.createElement('li');
	document.querySelector('.dropdown_app').appendChild(li_app);

	const filter_style_ustensils = document.createElement('div');
	filter_style_ustensils.className = 'filter_style ustenciles';
	filter_style_ustensils.id = 'div_style_ustensils';
	document.getElementById('section').appendChild(filter_style_ustensils);

	const filter_style_inside_ust = document.createElement('div');
	filter_style_inside_ust.classList.add('filter_style_inside');
	filter_style_inside_ust.id = 'filterInsideUst';
	document
		.getElementById('div_style_ustensils')
		.appendChild(filter_style_inside_ust);

	const filter_input_ust = document.createElement('input');
	filter_input_ust.className = 'filter_input ustenciles';
	filter_input_ust.placeholder = 'Ustenciles';
	document.getElementById('filterInsideUst').appendChild(filter_input_ust);

	const chevron_ust = document.createElement('i');
	chevron_ust.className = 'fas fa-chevron-down ';
	document.getElementById('filterInsideUst').appendChild(chevron_ust);

	const ul_ust = document.createElement('ul');
	ul_ust.className = 'dropdown_ust';
	document.getElementById('div_style_ustensils').appendChild(ul_ust);

	const li_ust = document.createElement('li');
	document.querySelector('.dropdown_ust').appendChild(li_ust);

	/* Looping through the recipesArray. */
	for (let i = 0; i < recipesArray.length; i++) {
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
		/* Looping through the ingredients array of each recipe. */
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
/* Calling the function `create_article` and passing the `recipesArray` as an argument. */
create_article(recipesArray);
