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

}
