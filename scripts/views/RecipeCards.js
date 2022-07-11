// Create recipe cards
export default class RecipeCards 
{
    constructor(data) 
    {
      this._recipe = data;
      this._name = data.name;
      this._time = data.time;
      this._ingredients = data.ingredients;
      this._description = data.description;
    }
  
    // Create recipe cards
    renderRecipeCards() 
    {
      const recipeContainer = document.createElement("div");
      recipeContainer.setAttribute("class", "col-lg-4 col-sm-6");
  
      const recipeCard = `
                <article class="container recipe p-0">

                    <!-- picture background - grey -->
                    <div class="row">
                      <div class="grey"></div>
                    </div>

                    <!-- recipe content -->
                    <div class="row">
                      <div class="content">
                        <div class="container p-4">

                          <!-- Time and title -->
                          <div class="row">
                            <div class="col-sm-7 ps-2 pe-0 col-6">
                              <h1>${this._name}</h1>
                            </div>
                            <div
                              class="col-md-4 offset-lg-0 col-lg-5 offset-2 col-4  col-sm-5 offset-md-1 text-end offset-xl-1 col-xl-4"
                            >
                              <i class="far fa-clock"></i>
                              <h2 class="d-inline ms-2">${this._time} min</h2>
                            </div>
                          </div>

                          <!-- ingredients -->
                          <div class="row pt-2 mt-2">
                            <div class="p-0 pe-2 col-lg-6">
                              <ul class="ps-2">
                                ${this._ingredients}
                              </ul>
                            </div>

                            <!-- Steps to follow -->
                            <div class="p-0 col-lg-6">
                              <p class="description">
                                ${this._description}
                              </p>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                 
                </article>
              `;
  
      recipeContainer.innerHTML = recipeCard;
      return recipeContainer;
    }
}