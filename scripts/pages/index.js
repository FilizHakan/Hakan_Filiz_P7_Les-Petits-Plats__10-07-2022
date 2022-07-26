import {recipes} from '../../data/recipes.js';

import FilterByAppliances from '../classes/FilterByAppliances.js';
import FilterByIngredients from '../classes/FilterByIngredients.js';
import FilterByUstensils from '../classes/FilterByUstensils.js';

import Recipe from "../models/Recipe.js";
import RecipeCards from '../views/RecipeCards.js';

export function displayRecipeCards(recipes) {
    const recipeSection = document.querySelector(".recipeArea");
  
    recipes.forEach( (data) => {
      const recipe = new Recipe(data);
      const template = new RecipeCards(recipe);
      recipeSection.appendChild(template.renderCards());
    });
  }
  
// Init homepage
function init() {
  // Display recipe cards
  displayRecipeCards(recipes);
}

init();

const filterIngredients =  new FilterByIngredients(recipes);
filterIngredients.start();

const filterAppliances =  new FilterByAppliances(recipes);
filterAppliances.start();

const filterUstensils = new FilterByUstensils(recipes)
filterUstensils.start();




