// Model to get recipes' data

export default class Recipe 
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

        let ingredients = []; // Array to fetch whatever we need
        let j = 0;

        do { // Loop do and while (it goes until everything is fetched)

          if (this._ingredients[j].ingredient) // First condition if an ingredient does exist
          {

            if (this._ingredients[j].quantity) // Second condition if a quantity does exist
            {
              // If a unity does exist
              if (this._ingredients[j].unit) // Third condition if a unit does exist
              {
                // Html to add with push method
                ingredients.push(` 
                <li>
                  <div class="d-inline ingredient-item">
                    ${this._ingredients[j].ingredient} : 
                  </div>
                  <div class="quantity d-inline">
                    ${this._ingredients[j].quantity} ${this._ingredients[j].unit}
                  </div>
                </li>`);
                j++;

              } else {

                // Html to add with push method
                ingredients.push(`
                <li>
                  <div class="d-inline ingredient-item">
                    ${this._ingredients[j].ingredient} : 
                  </div>
                  <div class="quantity d-inline">
                    ${this._ingredients[j].quantity}
                  </div>
                </li>`);
                j++;
              }

            } else {

              // Html to add with push method
              ingredients.push(`
              <li>
                <div class="d-inline ingredient-item">
                  ${this._ingredients[j].ingredient} 
                </div>
              </li>`);
              j++;
            }
          }
        } while (j < this._ingredients.length); // Closing the loop with while : It goes until the list of ingredients is completely added
        
        return ingredients.join(" "); // Return and add the elements of the array (list of ingredients that we've pushed)
    }
  
    get description() 
    {
      let i = 0;

    if (new RegExp("^\\s*\\S+(?:\\s+\\S+){0,40}\\s*$").test(this._description)) 
    {
      return this._description;
    
    } else {

      let descriptionCard = this._description.match(new RegExp("^([:a-zA-ZÀ-ž0-9\\^\\(\\)\\?\\!\\+\\*,\\.\\'\"/°]{0,}[\\s\\.]){0,40}"));
      console.log(this._description[i]);
      
      return descriptionCard[i].concat("..."); // Add ellipsis at the end of the text description
    }
    }

  }