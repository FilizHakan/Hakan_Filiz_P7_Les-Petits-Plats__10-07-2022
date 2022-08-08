import Filter from "./Filter.js";

export default class FilterByIngredients extends Filter
{
    constructor(recipes)
    {
        super('ingredients', 'Ingrédients', 'blue', recipes);
        
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
            const selection = recipe.ingredients.map(b => b.ingredient.toLowerCase());
            
            return (
                recipe.name.toLowerCase().includes(this.selection) || 
                recipe.description.toLowerCase().includes(this.selection) || 
                selection.join().includes(this.selection) 
            );
        }); 
        console.log(selection)
    }
}