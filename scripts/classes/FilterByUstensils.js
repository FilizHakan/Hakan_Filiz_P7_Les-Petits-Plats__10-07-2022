import Filter from "./Filter.js";
export default class FilterByUstensils extends Filter
{
    constructor(list)
    {
        super('ustensils', 'Ustensiles', 'salmon', list)
    }

    hydrate(recipes)
    {
        recipes.forEach(recipe =>
        {
            recipe.ustensils.forEach(item =>
                {
                    this.all.add(item.toLowerCase()); // Method add. is part of new Set()
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
            let count = 0;
            this.selection.forEach( item =>
            {
                if (recipe.ustensils.includes(item)) 
                {
                    count ++;
                }       
            });
                if (count == this.selection.length) 
                {
                    return true;
                }
            return false;
        }); 
    }
}