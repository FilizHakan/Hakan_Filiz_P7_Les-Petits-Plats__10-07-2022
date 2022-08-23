import Recipe from "../models/Recipe.js";
import RecipeCards from '../views/RecipeCards.js';
import Search from "./Search.js";
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

    clearRecipeCards() {
        const recipesSection = document.querySelector(".recipeArea");
        recipesSection.innerHTML = "";
    }

    display(recipes) 
    {
        const recipeSection = document.querySelector(".recipeArea");
        
        if (recipes.length >= 1)
        {
            recipes.forEach( (data) => {
                const recipe = new Recipe(data);
                const template = new RecipeCards(recipe);
                recipeSection.appendChild(template.renderCards());
            });

        } else {
            this.clearRecipeCards();
            this.errorMessage('Aucune recette ne correspond à votre critère... vous pouvez chercher "tarte aux pommes", "poisson", etc,.');
        
        }
        
    }

    errorMessage(errorMessage) {
        const recipesSection = document.querySelector(".recipeArea");
        const searchError = document.createElement("div");

        searchError.setAttribute("class", "searchError");
        searchError.innerHTML = errorMessage;
        recipesSection.appendChild(searchError);
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

    // Filter recipes according what people write in the search bar
    listenForSearch(recipes)
    {
        // Fetch elements in the index.html
        const searchForm = document.querySelector("#searchForm");
        const searchInput = document.querySelector("#searchInput");

        // Search by submit (enter)
        searchForm.addEventListener("submit", (e) =>
        {
            e.preventDefault();
            // Value entered in the search bar
            const search = searchInput.value;

            // Regex superior at 3 letters in the search bar
            const regex = new RegExp("^[:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°\\s]{3,}$");

            if (regex.test(search))
            {
                const recipeSearch = new Search(recipes, search);
                const newRecipes = recipeSearch.searchSort();
                this.display(newRecipes); // not sure about this line of code
                return newRecipes;

            } else {
                this.clearRecipeCards();
                this.errorMessage("Veuillez entrer au minimum 3 lettres pour votre recherche");
                this.display(recipes);
            }
        });

        // OR search by input
        searchForm.addEventListener("input", (e) =>
        {   
            e.preventDefault();
            // Value entered in the search bar
            const search = searchInput.value;

            if (search.length >= 3)
            {
                const recipesSearch = new Search(recipes, search);
                const newRecipes = recipesSearch.searchSort();
                this.newGallery(newRecipes); // not sure about this line of code
                return newRecipes;

            } else {
                this.display(recipes);
            }
        });

    }
  

}