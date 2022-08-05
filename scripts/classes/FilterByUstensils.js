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
                    this.all.add(item.toLowerCase()); // Method add. is part of new Set()
                });
        });
    }

    filterRecipes(recipes)
    {
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