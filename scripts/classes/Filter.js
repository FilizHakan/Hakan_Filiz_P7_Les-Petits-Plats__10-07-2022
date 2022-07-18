import Dropdown from "../views/Dropdown.js";

export default class Filter 
{
    constructor(ref, placeholder, color, recipes)
    {
        this.ref= ref;
        this.placeholder = placeholder;
        this.color = color;
        this.all = new Set();
        this.recipes = recipes;

        // Filters
        this.filterInIngredients = [];
        this.filterInAppliances = [];
        this.filterInUstensils = [];
    }

    // Display lists (tags for each dropdown)
    display()
    {
        let html=''
        this.all.forEach(item =>
            {
                html += `<span class="list-group-item ${this.color}-background col-4 col-sm-6 col-lg-6 display-inline ${this.ref}__item" tabindex="0">` + item + `</span>`
            });

            document.querySelector(`div[data-id="${this.ref}"] .options`).innerHTML = html;
    }

    start()
    {
        const dropdown = new Dropdown(this.ref, this.placeholder, this.color);
        document.querySelector(`.dropDownMenusArea`).appendChild(dropdown.createDropdown());
        this.closeDropdown();
        this.listenForOpeningDropdown();
        this.listenForClosingDropdown();
        this.hydrate(this.recipes);
        this.display();
        console.log(this.all);
    }

    listenForClosingDropdown()
    {
        document.querySelector(`div[data-id="${this.ref}"] .arrowClose`).addEventListener('click', () =>
        {
            this.closeDropdown();
        });
    }

    listenForOpeningDropdown()
    {
        
        document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`).addEventListener('click', () =>
        {
            this.openDropdown();
        });
    }

    openDropdown()
    {
        document.querySelector(`div[data-id="${this.ref}"] .options`).style.display = 'block';
        document.querySelector(`.dropDown--${this.ref}`).style.width = "239%";
        document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`).style.display = 'none';
        document.querySelector(`div[data-id="${this.ref}"] .arrowClose`).style.display = 'block';
    }

    closeDropdown()
    {
        document.querySelector(`div[data-id="${this.ref}"] .options`).style.display = 'none';
        document.querySelector(`.dropDown--${this.ref}`).style.width = "100%";
        document.querySelector(`div[data-id="${this.ref}"] .arrowClose`).style.display = 'none';
        document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`).style.display = 'block';
    }

    // Function to get ingredients, appareils and ustensils

    getFilterElements()
    {
        
    }
}