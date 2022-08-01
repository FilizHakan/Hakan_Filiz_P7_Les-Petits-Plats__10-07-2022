export default class Dropdown
{
    constructor(ref, placeholder, color)
    {
        this.ref = ref;
        this.placeholder = placeholder;
        this.color = color;
    }


    createDropdown()
    {
        const container = document.createElement('div');
        container.setAttribute('class', 'mt-2 col-12 col-md-6 col-xl-3 col-xl-2');
        container.setAttribute('id', `${this.ref}`)

        const dropdown =`
        <div data-id="${this.ref}" tabindex="0" id="div${this.ref}" class="divList">
            <form class="${this.ref} dropDown dropDown--${this.ref}" role="button" aria-haspopup="listbox" aria-expanded>
                <label for="${this.ref}"></label>
                <input type="text" class="${this.color}-background w-100 p-4 search__${this.ref} closed inputDropDown" placeholder="${this.placeholder}">
                <i class="bi bi-chevron-down arrowOpen"></i>
                <i class="bi bi-chevron-up arrowClose displayNone"></i>
            </form>
            <div class="options list pl-4 ${this.color}-background ${this.ref}__results d-flex invisible" role="listbox"></div>
        `;
        container.innerHTML = dropdown;

        return container;
    }
}