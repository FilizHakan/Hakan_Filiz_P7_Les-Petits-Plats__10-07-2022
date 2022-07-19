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
        this.recipesFiltered = recipes;

        this.dom = {
            list: null,
            input: null,
            open: null,
            close: null,
        }
        this.selection = [];
    }

    // Display lists (tags for each dropdown)
    display()
    {
        let html=''
        this.all.forEach( item =>
            {
                html += `
                <span 
                    class="list-group-item ${this.color}-background col-4 col-sm-6 col-lg-6 display-inline ${this.ref}__item" 
                    tabindex="0"
                    data-id="${item}"
                > ${item} 
                </span>`
            });

            this.dom.list.innerHTML = html;
    }

    filter(needle)
    {

        this.all.forEach(item => 
        {
            const el = this.dom.list.querySelector(`[data-id="${item}"]`);
            if (item.indexOf(needle) == -1)
            {
                el.classList.add('hidden');
            } else {
                el.classList.remove('hidden');
            }
        });
    }

    listenForClosingDropdown()
    {
        this.dom.close.addEventListener('click', () =>
        {
            this.closeDropdown();
        });
    }

    listenForOpeningDropdown()
    {
        
        this.dom.open.addEventListener('click', () =>
        {
            this.openDropdown();
        });
    }

    openDropdown()
    {
        this.dom.list.style.display = 'block';
        this.dom.open.style.display = 'none';
        this.dom.close.style.display = 'block';
    }

    closeDropdown()
    {
        this.dom.list.style.display = 'none';
        this.dom.close.style.display = 'none';
        this.dom.open.style.display = 'block';
    }

    // Function to get ingredients, appareils and ustensils

    listenForFiltering()
    {
        this.dom.input.addEventListener('input', e => 
        {
            const needle = e.target.value;
            this.filter(needle);
        })
    }
    // Listen to all tags when click on it
    listenForSelection()
    {
        this.dom.list.querySelectorAll('.list-group-item').forEach( tag =>
            {
                tag.addEventListener('click', () =>
                {
                    const value = tag.dataset.id;
                    this.selection.push(value);
                    this.displaySelection();
                    this.filterRecipe();
                })
            });
    }

    displaySelection()
    {
        document.querySelector('.tagsArea').innerHTML = '';
        this.selection.forEach( tag => 
        {
            document.querySelector('.tagsArea').innerHTML += `
            <div class="tag__item display-inline ${this.color}-background">
                <span 
                    class="tag"
                >${tag}
                </span>
                <i class="bi bi-x-circle"></i> 
            </div>`
        }
            )
    }

    start()
    {
        const dropdown = new Dropdown(this.ref, this.placeholder, this.color);
        document.querySelector(`.dropDownMenusArea`).appendChild(dropdown.createDropdown());
        this.dom.list = document.querySelector(`div[data-id="${this.ref}"] .options`);
        this.dom.open = document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`);
        this.dom.close = document.querySelector(`div[data-id="${this.ref}"] .arrowClose`);
        this.dom.input = document.querySelector(`div[data-id="${this.ref}"] .inputDropDown`);
        this.closeDropdown();
        this.listenForOpeningDropdown();
        this.listenForClosingDropdown();
        this.hydrate(this.recipes);
        this.display();
        this.listenForFiltering();
        this.listenForSelection();
    }
}