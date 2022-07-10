//Trier les listes afin de virer les doublons et tout mettre en minuscule
function sort(list) {
	let filteredArray = [];
	list = list.map(list => list.toLowerCase());
	filteredArray = list.filter((ele, pos) => list.indexOf(ele) == pos);

	return filteredArray;
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

/* Showing the dropdown menu for the ingredients. */
function showDropDownIngredients(ingredientsArray) {
	document.getElementById('div_style').style.display = 'none';
	document.getElementById('openDrop').style.display = 'block';

	var ul = document.getElementById('ulId');

	if (ul == null) {
	} else {
		for (let i = 0; i < ingredientsArray.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(ingredientsArray[i]));
			ul.appendChild(li);
		}
	}
}

/* Closing the dropdown menu for the ingredients. */
function closeDropDownIngredients(ingredientsArray) {
	document.getElementById('div_style').style.display = 'flex';
	document.getElementById('openDrop').style.display = 'none';
}

/* Showing the dropdown menu for the appliances. */
function showDropDownAppliances(appliancesArray) {
	document.getElementById('div_style_appareils').style.display = 'none';
	document.getElementById('openDropApp').style.display = 'block';

	var ul = document.getElementById('ulIdApp');

	if (ul == null) {
	} else {
		for (let i = 0; i < appliancesArray.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(appliancesArray[i]));
			ul.appendChild(li);
		}
	}
}

/* Closing the dropdown menu for the appliances. */
function closeDropDownAppliances() {
	document.getElementById('div_style_appareils').style.display = 'flex';
	document.getElementById('openDropApp').style.display = 'none';
}

function showDropDownUstensils(ustensilsArray) {
	document.getElementById('div_style_ustensils').style.display = 'none';
	document.getElementById('openDropUst').style.display = 'block';

	var ul = document.getElementById('ulIdUst');

	if (ul == null) {
	} else {
		for (let i = 0; i < ustensilsArray.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(ustensilsArray[i]));
			ul.appendChild(li);
		}
	}
}

function closeDropDownUstensils() {
	document.getElementById('div_style_ustensils').style.display = 'flex';
	document.getElementById('openDropUst').style.display = 'none';
}

function search() {
	//Create input and i(loup).
	const searchInput = document.createElement('input');
	searchInput.classList.add('search_input');
	searchInput.type = 'text';
	searchInput.placeholder = 'Rechercher une recette';
	document.getElementById('form').appendChild(searchInput);

	const fas_search = document.createElement('i');
	fas_search.className = 'fas fa-search';
	document.getElementById('form').appendChild(fas_search);
}

function ingredients() {
	const filter_style = document.createElement('div');
	filter_style.className = 'filter_style ingredients';
	filter_style.id = 'div_style';
	document.getElementById('section').appendChild(filter_style);

	const open_dropdown = document.createElement('div');
	open_dropdown.className = 'open_drop';
	open_dropdown.id = 'openDrop';
	document.getElementById('section').appendChild(open_dropdown);

	const open_dropdown_div = document.createElement('div');
	open_dropdown_div.className = 'filter_style_inside';
	document.getElementById('openDrop').appendChild(open_dropdown_div);

	const open_dropdown_input = document.createElement('input');
	open_dropdown_input.className = 'filter_input_drop';
	open_dropdown_input.placeholder = 'Rechercher un ingredient';
	document
		.querySelector('.filter_style_inside')
		.appendChild(open_dropdown_input);

	const open_dropdown_chevron = document.createElement('i');
	open_dropdown_chevron.className = 'fas fa-chevron-up';
	open_dropdown_chevron.addEventListener('click', function () {
		closeDropDownIngredients(ingredientsArray);
	});
	document
		.querySelector('.filter_style_inside')
		.appendChild(open_dropdown_chevron);

	const filter_style_inside = document.createElement('div');
	filter_style_inside.classList.add('filter_style_inside');
	filter_style_inside.id = 'FilterStyleInside';
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
	document.querySelector('.open_drop').appendChild(ul);
}

function appliances() {
	//Appliances
	const filter_style_appareils = document.createElement('div');
	filter_style_appareils.className = 'filter_style appareils';
	filter_style_appareils.id = 'div_style_appareils';
	document.getElementById('section').appendChild(filter_style_appareils);

	const open_dropdown_app = document.createElement('div');
	open_dropdown_app.className = 'open_drop_app';
	open_dropdown_app.id = 'openDropApp';
	document.getElementById('section').appendChild(open_dropdown_app);

	const dropdown_div_app = document.createElement('div');
	dropdown_div_app.className = 'filter_style_inside';
	dropdown_div_app.id = 'DropDivApp';
	document.getElementById('openDropApp').appendChild(dropdown_div_app);

	const dropdown_input_app = document.createElement('input');
	dropdown_input_app.className = 'filter_input_drop_app';
	dropdown_input_app.placeholder = 'Rechercher un appareil';
	document.getElementById('DropDivApp').appendChild(dropdown_input_app);

	const dropdown_chevron_app = document.createElement('i');
	dropdown_chevron_app.className = 'fas fa-chevron-up';
	dropdown_chevron_app.addEventListener('click', function () {
		closeDropDownAppliances();
	});
	document.getElementById('DropDivApp').appendChild(dropdown_chevron_app);

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
	chevron_app.addEventListener('click', function () {
		showDropDownAppliances(appliancesArray);
	});
	document.getElementById('filterInside').appendChild(chevron_app);

	const ul_app = document.createElement('ul');
	ul_app.className = 'dropdown_app';
	ul_app.id = 'ulIdApp';
	document.getElementById('openDropApp').appendChild(ul_app);
}

function ustencils() {
	const filter_style_ustensils = document.createElement('div');
	filter_style_ustensils.className = 'filter_style ustenciles';
	filter_style_ustensils.id = 'div_style_ustensils';
	document.getElementById('section').appendChild(filter_style_ustensils);

	const open_dropdown_ust = document.createElement('div');
	open_dropdown_ust.className = 'open_drop_ust';
	open_dropdown_ust.id = 'openDropUst';
	document.getElementById('section').appendChild(open_dropdown_ust);

	const dropdown_div_ust = document.createElement('div');
	dropdown_div_ust.className = 'filter_style_inside';
	dropdown_div_ust.id = 'DropDivUst';
	document.getElementById('openDropUst').appendChild(dropdown_div_ust);

	const dropdown_input_ust = document.createElement('input');
	dropdown_input_ust.className = 'filter_input_drop_ust';
	dropdown_input_ust.placeholder = 'Rechercher un ustencile';
	document.getElementById('DropDivUst').appendChild(dropdown_input_ust);

	const dropdown_chevron_ust = document.createElement('i');
	dropdown_chevron_ust.className = 'fas fa-chevron-up';
	dropdown_chevron_ust.addEventListener('click', function () {
		closeDropDownUstensils();
	});
	document.getElementById('DropDivUst').appendChild(dropdown_chevron_ust);

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
	chevron_ust.addEventListener('click', function () {
		showDropDownUstensils(ustensilsArray);
	});
	document.getElementById('filterInsideUst').appendChild(chevron_ust);

	const ul_ust = document.createElement('ul');
	ul_ust.className = 'dropdown_ust';
	ul_ust.id = 'ulIdUst';
	document.getElementById('openDropUst').appendChild(ul_ust);
}

function allRecipes(recipes) {
	for (let i = 0; i < recipes.length; i++) {
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
		recipes_title.innerHTML = recipes[i].name;
		document
			.getElementById('div_first_part' + i)
			.appendChild(recipes_title);

		const recipes_clock = document.createElement('i');
		recipes_clock.className = 'far fa-clock';
		recipes_clock.innerHTML = recipes[i].time + ' min';
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

		recipes[i].ingredients.forEach(Element => {
			const ingredients = document.createElement('li');
			ingredients.classList.add('ingredients_recipes');
			ingredients.innerHTML = showIngredients(Element);

			document
				.getElementById('list_ingredient' + i)
				.appendChild(ingredients);
		});

		const description = document.createElement('p');
		description.classList.add('description_recipes');
		description.innerText = recipes[i].description;
		document
			.getElementById('recipes_ingredient' + i)
			.appendChild(description);
	}
}
