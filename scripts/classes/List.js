import Recipe from "../models/Recipe.js";
import RecipeCards from '../views/RecipeCards.js';

export default class List {

    constructor(recipes)
    {
        this.all = recipes;
        this.filters = [];
    }

    addFilter(filter)
    {
        filter.start();
        this.filters.push(filter);
    }

    display(recipes) 
    {
        const recipeSection = document.querySelector(".recipeArea");
        recipeSection.innerHTML = '';

        recipes.forEach( (data) => {
            const recipe = new Recipe(data);
            const template = new RecipeCards(recipe);
            recipeSection.appendChild(template.renderCards());
        });
    }

    filter()
    {   
        let filtered = this.all;
        
        this.filters.forEach(filter => 
            {
                filtered = filter.filterRecipes(filtered);
            });

            this.display(filtered);
            this.filters.forEach(filter =>
            {
                filter.all = new Set();
                filter.hydrate(filtered);
                filter.display();
                if (filtered.length > 0)
                {
                filter.disableSelectedItems();
                filter.listenForSelection();
                filter.displaySelection();
                filter.listenForUnselect();
                }
            })

            return filtered;
        
    }
}