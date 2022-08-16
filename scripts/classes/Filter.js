import Dropdown from "../views/Dropdown.js";
import List from "../classes/List.js";
export default class Filter 
{
    constructor(ref, placeholder, color, list)
    {
        this.ref= ref;
        this.placeholder = placeholder;
        this.color = color;
        this.all = new Set();
        this.list = list;

        this.dom = {
            list: null,
            input: null,
            open: null,
            close: null,
        }

        this.selection = [];
    }

    // Display lists for each dropdown
    display()
    {
        let html=''
        this.all.forEach( item =>
            {
                html += `
                <button
                    class="list"
                    tabindex="0"
                    data-id="${item}"
                > ${item} 
                </button>`
            });

            this.dom.list.innerHTML = html;
    }

    // Display tags above drop down
    displaySelection()
    {
        document.querySelector(`.tag-${this.ref}`).innerHTML = '';

        this.selection.forEach( tag => 
        {
            document.querySelector(`.tag-${this.ref}`).innerHTML += `
            <div class="tag__item display-inline ${this.color}-background" data-id="${tag}">
                <span 
                    class="tag"
                >${tag}
                </span>
                <i class="bi bi-x-circle closeTag"></i> 
            </div>`
        });
    }

    closeDropdown()
    {
        this.dom.list.style.display = 'none';
        document.querySelector(`.${this.ref}__results`).classList.add("invisible");
        this.dom.close.style.display = 'none';
        this.dom.open.style.display = 'block';
        document.querySelector(`#${this.ref}`).classList.add("col-xl-2");
        document.querySelector(`#${this.ref}`).classList.remove("col-xl-3");
        this.dom.input.classList.add("closed");
        this.dom.input.classList.remove("opened");
        if (`${this.ref}` == "ingredients") this.dom.input.setAttribute("placeholder", "Ingrédients");
        if (`${this.ref}` == "appareils") this.dom.input.setAttribute("placeholder", "Appareils");
        if (`${this.ref}` == "ustensils") this.dom.input.setAttribute("placeholder", "Ustensiles");
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
    
    // Function to get ingredients, appareils and ustensils tags
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
        this.dom.list.querySelectorAll('.list').forEach( tag =>
        {
            tag.addEventListener('click', () =>
            {
                tag.disabled = true;
                const value = tag.dataset.id;
                this.selection.push(value);
                this.list.filter();

            })
        });

    }

    listenForUnselect()
    {
        this.selection.forEach( item =>
        {
            document.querySelector(`.tag-${this.ref} .tag__item[data-id="${item}"] .closeTag`).addEventListener( "click", (e) =>
            {
                e.preventDefault();
                const index = this.selection.findIndex(a => a == item);
                this.selection.splice(index, 1);
                this.list.filter();
 
            });             
        });
    }

    disableSelectedItems()
    {
        this.selection.forEach( item =>
            {
                this.dom.list.querySelector(`[data-id="${item}"]`).disabled = true;
                console.log(this.selection)
            })
    }

    openDropdown()
    {
        this.dom.list.style.display = 'block';
        this.dom.open.style.display = 'none';
        this.dom.close.style.display = 'block';
        document.querySelector(`#${this.ref}`).classList.remove("col-xl-2");
        document.querySelector(`#${this.ref}`).classList.add("col-xl-3");  
        document.querySelector(`.${this.ref}__results`).classList.remove("invisible");
        this.dom.input.classList.remove("closed");
        this.dom.input.classList.add("opened");
        if (`${this.ref}` == "ingredients") this.dom.input.setAttribute("placeholder", "Rechercher un ingrédient");
        if (`${this.ref}` == "appareils") this.dom.input.setAttribute("placeholder", "Rechercher un appareil");
        if (`${this.ref}` == "ustensils") this.dom.input.setAttribute("placeholder", "Rechercher un ustensile");
    }

    createNoResultHTML () {
        const noResult = document.createElement('button')
        noResult.classList.add('filter__result', 'no-result', 'm-0', 'p-3', 'pt-0', 'text-white', 'fs-6')
        noResult.innerHTML = 'Aucun résultat'
    
        return noResult
    }

    start()
    {
        const dropdown = new Dropdown(this.ref, this.placeholder, this.color);
        document.querySelector(`.dropDownMenusArea`).appendChild(dropdown.createDropdown());
        this.dom.list = document.querySelector(`div[data-id="${this.ref}"] .options`);
        this.dom.open = document.querySelector(`div[data-id="${this.ref}"] .arrowOpen`);
        this.dom.close = document.querySelector(`div[data-id="${this.ref}"] .arrowClose`);
        this.dom.input = document.querySelector(`div[data-id="${this.ref}"] .inputDropDown`);
        document.querySelector(`.tagsArea`).innerHTML += `<div class="tag-${this.ref}"></div>`;
        this.closeDropdown();
        this.listenForOpeningDropdown();
        this.listenForClosingDropdown();
        this.hydrate(this.list.all);
        this.display();
        this.listenForFiltering();
        this.listenForSelection();
    }
    
}