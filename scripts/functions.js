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

function showDropDownIngredients(ingredients) {
	//const li = document.createElement('li');
	var ul = document.getElementById('ulId');

	if (ul == null) {
	} else {
		for (let i = 0; i < ingredients.length; i++) {
			var li = document.createElement('li');
			li.appendChild(document.createTextNode(ingredients[i]));
			ul.appendChild(li);
		}
	}
}
