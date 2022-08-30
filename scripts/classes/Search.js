// Class for the search algo (search bar)
import { normalise } from "../tools/functions.js";
export default class Search
{
    constructor(recipes, needle)
    {
        this.recipes = recipes;
        this.needle = normalise(needle, true);
    }

    // 1st Algo : Programmation Fonctionnelle
    go() 
    {
		console.log('******needle******')
		console.log('needle :', this.needle)
		console.time('algo 1')
		
		const arrayRecipes = this.recipes.filter((data) => 
		{
			let arrayIngredients = data.ingredients.map((el) => el.ingredient.toLowerCase());

			return (
			normalise(data.name).includes(this.needle) || // By title
			normalise(data.description).includes(this.needle) || // By description
			arrayIngredients.join().includes(this.needle) // By ingredients
			);

		});
		console.timeEnd('algo 1');
		return arrayRecipes;  
    }

    // 2nd Algo : Boucles Natives
    goAlt()
    {
		console.log('******needle******')
		console.log('needle :', this.needle)
		console.time('algo 2')

		let arrayRecipes = [];

		for (let j = 0; j < this.recipes.length; j++)
		{
			const recipe = this.recipes[j];

			if (this.isNeedleInTitleOrDescription(recipe) || this.isNeedleInIngredient(recipe))
			{
				arrayRecipes.push(recipe);
			}	
		}

		console.timeEnd('algo 2')

		return arrayRecipes;
    }

	isNeedleInIngredient(recipe)
	{
		let index = 0;

		for (let i = 0; i < recipe.ingredients.length; i++)
		{
			if (recipe.ingredients[i].ingredient.toLowerCase().includes(normalise(this.needle, true))) // By ingredients
			{
				arrayRecipes[index] = recipe;
				return true;
			}
		}

		return false;
	}

	isNeedleInTitleOrDescription(recipe)
	{
		if (normalise(recipe.name).includes(normalise(this.needle, true))) 
		{
			return true;
		} 

		if (normalise(recipe.description).includes(normalise(this.needle, true))) // By description
		{
			return true;
		}

		return false;
	}
}