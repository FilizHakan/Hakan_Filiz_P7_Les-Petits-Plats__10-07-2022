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

    closeDropdown()
    {
        this.dom.list.style.display = 'none';
        document.querySelector(`.${this.ref}__results`).classList.add("invisible");
        this.dom.close.style.display = 'none';
        this.dom.open.style.display = 'block';
        document.querySelector(`#${this.ref}`).classList.add("col-xl-2");
        if (`${this.ref}` === "ingredients") document.querySelector(`#ingredients`).classList.remove("col-xl-4");
        if (`${this.ref}` === "ingredients") document.querySelector(`#ingredients`).classList.remove("col-xl-3");
        if (`${this.ref}` === "ustensils") document.querySelector(`#ustensils`).classList.remove("col-xl-4");
        if (`${this.ref}` === "ustensils") document.querySelector(`#ustensils`).classList.remove("col-xl-3");  
        if (`${this.ref}` === "appareils") document.querySelector(`#appareils`).classList.remove("col-xl-3");  
        this.dom.input.classList.add("closed");
        this.dom.input.classList.remove("opened");
        if (`${this.ref}` == "ingredients") this.dom.input.setAttribute("placeholder", "Ingrédients");
        if (`${this.ref}` == "appareils") this.dom.input.setAttribute("placeholder", "Appareils");
        if (`${this.ref}` == "ustensils") this.dom.input.setAttribute("placeholder", "Ustensiles");
    }

    disableSelectedItems()
    {
        this.selection.forEach( item =>
            {
                this.dom.list.querySelector(`[data-id="${item}"]`).disabled = true;
                console.log(this.selection)
            })
    }

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

    listenForOpeningByInput()
    {
        this.dom.input.addEventListener('click', (e) => 
        {
            e.preventDefault();
            const needle = e.target.value;
            this.filter(needle);   
            this.openDropdown();  
        });
    }

    listenForFiltering()
    {
        this.dom.input.addEventListener('input', (e) => 
        {
            e.preventDefault();
            const needle = e.target.value;
            this.filter(needle);   
            this.openDropdown();    
            
        });
    }

    listenForOpeningDropdown()
    {
        this.dom.open.addEventListener('click', () =>
        {
            this.openDropdown();
        });
    }

    listenForSelection()
    {
        this.dom.list.querySelectorAll('.list').forEach( tag =>
        {
            tag.addEventListener('click', () =>
            {
                tag.disabled = true;
                const value = tag.dataset.id;
                this.selection.push(value);
                this.list.filter(this.list.all);
                this.closeDropdown(tag);
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
                this.list.filter(this.list.all);
            });             
        });
    }

    openDropdown()
    {
        this.dom.input.style.display = 'block';
        this.dom.list.style.display = 'block';
        this.dom.open.style.display = 'none';
        this.dom.close.style.display = 'block';
        document.querySelector(`#${this.ref}`).classList.remove("col-xl-2");
        if (`${this.ref}` == "ingredients") document.querySelector(`#ingredients`).classList.add("col-xl-4");
        if (`${this.ref}` == "ustensils") document.querySelector(`#ustensils`).classList.add("col-xl-4");  
        if (`${this.ref}` == "appareils") document.querySelector(`#appareils`).classList.add("col-xl-3");  
        document.querySelector(`.${this.ref}__results`).classList.remove("invisible");
        this.dom.input.classList.remove("closed");
        this.dom.input.classList.add("opened");
        if (`${this.ref}` == "ingredients") this.dom.input.setAttribute("placeholder", "Rechercher un ingrédient");
        if (`${this.ref}` == "appareils") this.dom.input.setAttribute("placeholder", "Rechercher un appareil");
        if (`${this.ref}` == "ustensils") this.dom.input.setAttribute("placeholder", "Rechercher un ustensile");
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
        this.listenForOpeningByInput();
        this.listenForClosingDropdown();
        this.hydrate(this.list.all);
        this.display();
        this.listenForFiltering();
        this.listenForSelection();
    }

    warning(inputTagMessage)
    {
        const searchError = document.createElement("div");

        searchError.setAttribute("class", "searchTagError");
        searchError.innerHTML = inputTagMessage;
        this.dom.list.appendChild(searchError);
    }
    
}
