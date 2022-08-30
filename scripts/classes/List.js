import Recipe from "../models/Recipe.js";
import { getFromQueryString } from "../tools/functions.js";
import RecipeCards from '../views/RecipeCards.js';
import Search from "./Search.js";
export default class List {

    constructor(recipes)
    {
        this.all = recipes;
        this.filters = [];
        this.dom = 
        {
            area: document.querySelector(".recipeArea")
        }
        this.algo = getFromQueryString('algo');
    }

    addFilter(filter)
    {
        filter.start();
        this.filters.push(filter);
    }

    clearRecipeCards() {
        this.dom.area.innerHTML = "";
    }

    display(recipes) 
    {
        this.clearRecipeCards();

        if (recipes.length === 0)
        {
            this.warning('Aucune recette ne correspond à votre critère… vous pouvez chercher « tarte aux pommes », « poisson », etc.');
            return;      
        }

        recipes.forEach( (data) => 
        {
            const recipe = new Recipe(data);
            const template = new RecipeCards(recipe);
            this.dom.area.appendChild(template.renderCards());
        });
    }

    warning(message) {
        const searchError = document.createElement("div");

        searchError.setAttribute("class", "searchError");
        searchError.innerHTML = message;
        this.dom.area.appendChild(searchError);
    }

    filter(recipes)
    {   
        let filtered = recipes;
        
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

    listenForSearch()
    {
        // Fetch elements in the index.html
        const searchForm = document.querySelector("#searchForm");
        const searchInput = document.querySelector("#searchInput");

        // Search by input
        searchForm.addEventListener("input", (e) =>
        {
            e.preventDefault();
            const needle = searchInput.value;

            if (needle.length === 0)
            {
                this.display(this.all);
                return;
            }

            if (needle.length > 0 && needle.length < 3)
            {
                this.clearRecipeCards();
                this.warning("Veuillez entrer au minimum 3 caractères pour votre recherche");
                return;
            }

            const search = new Search(this.all, needle);
            let filtered;
            
            filtered = search.go(filtered);
            
            filtered = this.filter(filtered);

            this.display(filtered);

            return;

        });
    }
}