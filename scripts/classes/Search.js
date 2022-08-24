// Class for the search algo (search bar)
import { normalise } from "../tools/functions.js";
export default class Search
{
    constructor(recipes, needle)
    {
        this.recipes = recipes;
        this.needle = needle;
    }

    // 1st Algo
    go() 
    {
		console.log('******needle******')
		console.log('needle :', this.needle)
		console.time('algo 1')
		
		const arrayRecipes = this.recipes.filter((data) => 
		{
			let arrayIngredients = data.ingredients.map((el) => el.ingredient.toLowerCase());

			return (
			normalise(data.name).includes(normalise(this.needle, true)) || // By name
			normalise(data.description).includes(normalise(this.needle, true)) || // By description
			arrayIngredients.join().includes(normalise(this.needle, true)) // By ingredients
			);

		});
		console.timeEnd('algo 1')
		return arrayRecipes;  
    }

    // 2nd Algo 
    goAlt()
    {
		console.log('******needle******')
		console.log('needle :', this.needle)
		console.time('algo 2')

		let arrayRecipes = [];
		let index = 0;

		for (let j = 0; j < this.recipes.length; j++)
		{
			const recipe = this.recipes[j];

			if (normalise(recipe.name).includes(normalise(this.needle, true)) ||
			normalise(recipe.description).includes(normalise(this.needle, true)))
			{
				arrayRecipes[index] = recipe;
				index++;
			}
		
			for (let i = 0; i < recipe.ingredients.length; i++)
			{

				if (recipe.ingredients[i].ingredient.toLowerCase().includes(normalise(this.needle, true)))
				{
					arrayRecipes[index] = recipe;
					index++;
				}
			}
		}

		console.timeEnd('algo 2')

		return arrayRecipes;
    }
}