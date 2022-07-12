import {recipes} from '../../data/recipes.js';

export default class FilterByUstensils 
{
    constructor(recipes)
    {
        this.ustensils = [];

        this._recipes = recipes;
        this._ustensils = recipes.ustensils;

        // Query selectors
        this.dropDownContainer = document.querySelector('.dropDown--ustensils');
        this.input = document.querySelector('#inputDropDownSalmon');
        this.optionContainer = document.querySelector('.optionContainer3');
        this.arrow = document.querySelector('.bi-chevron-down');
        this.listElement = document.querySelector('.listing'); // From <ul> element in ListElements.js 
        this.tagsArea = document.querySelector(".tagsArea"); // In html
        }

    // =================================
    //    GET RECIPES - FOREACH LOOP
    // =================================

    async getRecipes () 
    {
        const dataRecipes = await this._recipes;

        dataRecipes.forEach( (recipe) => 
        {
            recipe.display = true;
        });
    }

    // =============================
    //    EVENT LISTENER BY CLICK
    // =============================

    IsDisplayUstensilsDataTrue = (data, tab) => 
    {

        data.forEach( (recipe) => 
        {
            if (recipe.display == true) 
            {
                recipe.ustensils.forEach(e => 
                    {
                    tab.push(e)
                    });
            }
        })
    };

    displayDropDownListContents = (pixel) => {

        if (this.optionContainer.classList.contains("displayNone")) 
        {
            this.optionContainer.classList.remove('displayNone');
            this.optionContainer.classList.add('displayFlex');
            this.input.classList.remove('displayNone');
            this.input.classList.add('displayBlock');
            this.dropDownContainer.style.width = pixel + "px";
            this.input.focus();
            this.arrow.classList.remove('arrowClose');
            this.arrow.classList.add('arrowOpen');

        } else {
            this.input.classList.add('displayNone');
            this.arrow.classList.remove('arrowOpen');
            this.arrow.classList.add('arrowClose');
            this.dropDownContainer.style.width = "250px";
            this.optionContainer.classList.remove('displayFlex');
            this.optionContainer.classList.add('displayNone');
            this.input.classList.remove('displayBlock');
            
        }
    }

    listenForUstensilByClick ()
    {
        this.dropDownContainer.addEventListener('click', () => 
        {
    
            // Get all the recipes which are in display true
            this.IsDisplayUstensilsDataTrue(dataRecipes, this.ustensils)
    
            // Take off doubles with the filter method
            const removeDuplicate = (ustArray) => ustArray.filter((item, pos) => 
            {
                return array.indexOf(item.toLowerCase()) == pos;
            });

            const filteredUstensilArray = removeDuplicate(this.ustensils);
    
            // Get it into the 3rd option container
            this.listElement.innerHTML = " ";

            filteredUstensilArray.forEach(ustensil => 
                {
                this.listElement.innerHTML += `
                <li 
                class="element" 
                id="${ustensil}">
                ${ustensil}
                </li>`
                });
    
            // Display the option container
            this.displayDropDownListContents(this.optionContainer, this.input, this.arrow, this.dropDownContainer);
        })
    }

    // ==============================
    //    EVENT LISTENER - BY INPUT
    // ==============================
    listenForUstensilByInput()
    {
        this.input.addEventListener('input', () =>
        {
            // If more than 3 character typing value
            if(this.input.value.length > 3) 
            {
                const valueTyping = this.input.value.toLowerCase();
                
                // Fetch ingredients fron the recipes which are in display true
                this.IsDisplayUstensilsDataTrue(dataRecipes, this.ustensils);

                // Take off doubles with the filter method
                const removeDuplicate = (ustArray) => ustArray.filter((item, pos) => 
                {
                    return array.indexOf(item.toLowerCase()) == pos;
                });

                const filteredUstensilArray = removeDuplicate(this.ustensils);

                filteredUstensilArray.forEach()


            }
        });
    }

    // ==============================================
    //    EVENT LISTENER BY CLICK FOR TAG CREATION
    // ==============================================

    listenForTagCreation ()
    {

    }
}