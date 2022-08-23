// Class for the search algo (search bar)

export default class Search
{
    constructor(recipes, search)
    {
        this.recipes = recipes;
        this.search = search;
    }

    // 1st Algo with functional programming
    searchSort() 
    {
        // Fetch recipes with the filter(), then map() methods
        let arrayRecipes = this.recipes.filter((data) => 
        {
          let arrayIngredients = data.ingredients.map((el) =>
            el.ingredient.toLowerCase()
          );

          return (
            data.name.toLowerCase().includes(this.search.toLowerCase().trim()) || // By name
            data.description.toLowerCase().includes(this.search.toLowerCase().trim()) || // By description
            arrayIngredients.join().includes(this.search.toLowerCase().trim()) // By ingredients
          );

        });

        return arrayRecipes;
    }

    // 2nd Algo with native loops: for and if/else
    /*searchSortAlt()
    {
        let arrayRecipes = [];
        let index = 0;

        for (let j=0; j<this.recipes.length; j++)
        {
          if (this.recipes[j].name.toLowerCase().includes(this.search.toLowerCase.trim()) ||
              this.recipes[j].description.toLowerCase().includes(this.search.toLowerCase.trim()))
          {
            arrayRecipes[index] = this.recipes[j];
            index++;
          }
        }

        for (let i=0; i<this.recipes[k].ingredients.length; i++)
        {
          if (this.recipes[k].ingredients[i].ingredient.toLowerCase().includes(this.search.toLowerCase.trim())
          {
            arrayRecipes[index] = this.recipes[k];
            index++;
          }
        }
        return arrayRecipes;
    }*/
}