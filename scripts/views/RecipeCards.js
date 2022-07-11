// Create recipe cards
export default class RecipeCards {
    constructor(recipe) {
      this._recipe = recipe;
      this._name = recipe.name;
      this._time = recipe.time;
      this._ingredients = recipe.ingredients;
      this._description = recipe.description;
    }
  
    // Create recipe cards
    renderRecipeCards() {
      const recipeWrapper = document.createElement("div");
      recipeWrapper.setAttribute("class", "small-column-6 large-column-4 ");
  
      const recipeCard = `
                <article class="container recipe overflow">

                    <!-- picture background - grey -->
                    <div class="row">
                      <div class="grey"></div>
                    </div>

                    <!-- recipe content -->
                    <div class="row">
                      <div class="recipe__content">
                        <div class="container">

                          <!-- Time and title -->
                          <div class="row">
                            <div class="col-6 col-sm-7 ps-2 pe-0">
                              <h1>${this._name}</h1>
                            </div>
                            <div
                              class="offset-2 col-4  col-sm-5 offset-md-1 col-md-4 offset-lg-0 col-lg-5 text-end offset-xl-1 col-xl-4"
                            >
                              <i class="far fa-clock"></i>
                              <h2 class="d-inline ms-2">${this._time} min</h2>
                            </div>
                          </div>

                          <!-- ingredients -->
                          <div class="row mt-2 pt-2">
                            <div class="col-lg-6 p-0 pe-2">
                              <ul class="ps-2">
                                ${this._ingredients}
                              </ul>
                            </div>
                            
                            <!-- Steps to follow -->
                            <div class=" col-lg-6 p-0 ">
                              <p class="recipe__description">
                                ${this._description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                 
                </article>
              `;
  
      recipeWrapper.innerHTML = recipeCard;
      return recipeWrapper;
    }
  }
