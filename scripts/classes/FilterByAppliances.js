import Filter from "./Filter.js";
export default class FilterByAppliances extends Filter
{
    constructor(recipes)
    {
        super('appareils', 'Appareils', 'green', recipes)
    }

    hydrate(recipes)
    {
        recipes.forEach(recipe =>
        {
            this.all.add(recipe.appliance); // Method add. is part of new Set()      
        });
    }

}