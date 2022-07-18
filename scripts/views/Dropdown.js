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
        container.setAttribute('class', 'col-lg-2 col-sm-4');

        const dropdown =`
        <div data-id="${this.ref}" tabindex="0" id="div${this.ref}" class="divList">
            <form class="${this.ref} dropDown dropDown--${this.ref}" role="button" aria-haspopup="listbox" aria-expanded>
                <label for="${this.ref}"></label>
                <input type="text" class="${this.color}-background inputDropDown" autocomplete="off" value="" placeholder="${this.placeholder}">
                <i class="bi bi-chevron-down arrowOpen"></i>
                <i class="bi bi-chevron-up arrowClose displayNone"></i>
            </form>
            <div id="list${this.ref}" class="options list col-sm-12" role="listbox"></div>
        `;
        container.innerHTML = dropdown;

        return container;
    }
}