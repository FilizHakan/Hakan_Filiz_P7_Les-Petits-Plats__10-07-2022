import {recipes} from '../../data/recipes.js';
import Recipes from "../models/Recipes.js";
import RecipeCards from '../views/RecipeCards.js';

function displayRecipeCards(recipes) {
    const recipeSection = document.querySelector(".recipeArea");
  
    recipes.forEach( (data) => {
      const fetchRecipe = new Recipes(data);
      const Template = new RecipeCards(fetchRecipe);
      recipeSection.appendChild(Template.renderRecipeCards());
    });
  }
  
  // Init homepage
  async function init() {
    // Display recipe cards
    displayRecipeCards(recipes);
  }
  
  init();