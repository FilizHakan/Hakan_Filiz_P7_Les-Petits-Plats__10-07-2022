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
    }

    // Display lists (tags for each dropdown)
    display()
    {
        let html=''
        this.all.forEach(item =>
            {
                html += `<span style='border: 2px solid #eee; padding: 5px 20px">` + item + `</span>`
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
        document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`).style.display = 'none';
        document.querySelector(`div[data-id="${this.ref}"] .arrowClose`).style.display = 'block';
    }

    closeDropdown()
    {
        document.querySelector(`div[data-id="${this.ref}"] .options`).style.display = 'none';
        document.querySelector(`div[data-id="${this.ref}"] .arrowClose`).style.display = 'none';
        document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`).style.display = 'block';
    }
}