export default class Recipes 
{
    constructor(recipe) 
    {
      this._recipe = recipe;
      this._name = recipe.name;
      this._time = recipe.time;
      this._ingredients = recipe.ingredients;
      this._description = recipe.description;
    }
  
    get recipe() 
    {
      return this._recipe;
    }
  
    get name() 
    {
      return this._name;
    }
  
    get time() 
    {
      return this._time;
    }
  
    get ingredients() 
    {
      let ingredients = [];
      let i = 0;
      do {
        // If an ingredient does exist
        if (this._ingredients[i].ingredient) 
        {
          // If a quantity does exist
          if (this._ingredients[i].quantity) 
          {
            // If a unity does exist
            if (this._ingredients[i].unit) 
            {
              ingredients.push(`<li>
              <p class="recipe__ingredient d-inline">
               ${this._ingredients[i].ingredient} :
              </p>
              <p class="recipe__quantity d-inline">${this._ingredients[i].quantity}${this._ingredients[i].unit}</p>
            </li>`);
              i++;
            } else {
              ingredients.push(`<li>
            <p class="recipe__ingredient d-inline">
             ${this._ingredients[i].ingredient} :
            </p>
            <p class="recipe__quantity d-inline">${this._ingredients[i].quantity}</p>
          </li>`);
              i++;
            }
          } else {
            ingredients.push(`<li>
          <p class="recipe__ingredient d-inline">
           ${this._ingredients[i].ingredient} 
          </p>
        </li>`);
            i++;
          }
        }
      } while (i < this._ingredients.length); // It goes until the list of ingredients is not completely added
      return ingredients.join(" ");
    }
  
    get description() 
    {
      if (new RegExp("^\\s*\\S+(?:\\s+\\S+){0,40}\\s*$").test(this._description)) 
      {
        return this._description;

      } else {
        const cardDescription = this._description.match(new RegExp("^([:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°]{0,}[\\s\\.]){0,40}"));
        console.log(cardDescription[0]);

        return cardDescription[0].concat("...");
      }
    }
  }