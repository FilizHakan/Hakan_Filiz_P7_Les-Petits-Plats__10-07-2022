import Filter from "./Filter.js";

export default class FilterByIngredients extends Filter
{
    constructor(recipes)
    {
        super('ingredients', 'Ingrédients', 'blue', recipes)
    }

    hydrate(recipes)
    {
        recipes.forEach(recipe =>
            {
                recipe.ingredients.forEach(element =>
                    {
                        this.all.add(element.ingredient); // Method add. is part of new Set()
                    });
            });
    }
}