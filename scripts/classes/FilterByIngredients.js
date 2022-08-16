import Filter from "./Filter.js";

export default class FilterByIngredients extends Filter
{
    constructor(list)
    {
        super('ingredients', 'Ingrédients', 'blue', list);
        
    }

    hydrate(recipes)
    {
        recipes.forEach(recipe =>
            {
                recipe.ingredients.forEach(element =>
                    {
                        this.all.add(element.ingredient.toLowerCase()); // Method add. is part of new Set()
                    });
            });
    }

    filterRecipes(recipes)
    {
        if (this.selection.length === 0)
        {
            return recipes;
        }
        
        return recipes.filter( recipe => 
        {
            const ingredients = recipe.ingredients.map(b => b.ingredient.toLowerCase());
            
            let count = 0;

            ingredients.forEach(item =>
            {   
                if (this.selection.includes(item))
                {
                    count++; // quantity of ingredients selected present in recipe
                }
            });

            if (count === this.selection.length) 
            {
                return true;
            }

            return false;
        });       
    }
}