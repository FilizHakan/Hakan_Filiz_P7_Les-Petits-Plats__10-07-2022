import Filter from "./Filter.js";
export default class FilterByAppliances extends Filter
{
    constructor(list)
    {
        super('appareils', 'Appareils', 'green', list)
    }

    hydrate(recipes)
    {
        recipes.forEach(recipe =>
        {
            this.all.add(recipe.appliance.toLowerCase()); // Method add. is part of new Set()      
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
            const selection = this.selection.map(a => a.toLowerCase());
            return (selection.includes(recipe.appliance.toLowerCase()));
        }); 
    }
}