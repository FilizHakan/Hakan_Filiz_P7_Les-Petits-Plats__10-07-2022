export default class ListElements 
{
    constructor (data)
    {
        this._recipes = data;
        this._ingredients = data.ingredients;
        this._ustensils = data.ustensils;
        this._appliances = data.appliances;

    }

    // Render list of ingredients 

    renderIngredientsList ()
    {
        const ingredientsList = document.createElement('ul');
        ingredientsList.classList.add('displayNone listing ingredientsList col-sm-12');

        const listIng = `
        ${this._ingredients}
              `;

              ingredientsList.innerHTML = listIng;

              return ingredientsList;
    }

    // Render list of appliances

    renderAppliancesList ()
    {
        const appliancesList = document.createElement('ul');
        appliancesList.classList.add('displayNone listing appliancesList col-sm-12');

        const listApp = `
        ${this._applicances}
              `;

              appliancesList.innerHTML = listApp;

              return appliancesList;
    }

    // Render list of Ustencils

    renderUstencilsList ()
    {
        const ustensilsList = document.createElement('ul');
        ustensilsList.classList.add('listing ustencilsList col-sm-12');

        const listUst = `
        ${this._ustensils}
              `;

              ustensilsList.innerHTML = listUst;

              return ustensilsList;
    }
}