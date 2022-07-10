import {recipes} from '../../data/recipes.js';
import Recipes from "../classes/Recipes.js";
import RecipeCards1 from '../views1/RecipeCards1.js';

function displayRecipeCards(recipes) {
    const recipeSection = document.querySelector(".recipeArea");
  
    recipes.forEach( (recipe) => {
      const fetchRecipe = new Recipes(recipe);
      const Template = new RecipeCards1(fetchRecipe);
      recipeSection.appendChild(Template.renderRecipeCards());
    });
  }
  
  // Init homepage
  async function init() {
    // Display recipe cards
    displayRecipeCards(recipes);
  }
  
  init();