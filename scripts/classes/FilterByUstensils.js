import Filter from "./Filter.js";
export default class FilterByUstensils extends Filter
{
    constructor(recipes)
    {
        super('ustensils', 'Ustensiles', 'salmon', recipes)
    }

    hydrate(recipes)
    {
        recipes.forEach(recipe =>
        {
            recipe.ustensils.forEach(item =>
                {
                    this.all.add(item); // Method add. is part of new Set()
                });
        });
    }

    filterRecipe()
    {
        this.recipesfiltered = this.recipes.filter( recipe => 
        {
            if (recipe.ustensils === this.selection[0]) 
            {
                return true;
            }
            return false;
        }); 
    }
}