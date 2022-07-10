export const createRecipeCards = (recipe) =>
{
    return `  
    <div class="dropdownContainer">
        <div role="button" aria-haspopup="listbox" aria-expanded class="dropdown dropdown--${name}" name="select_by" id="select_by">
            <div class="firstDropDown">
                <label for="${id}">
                    <p class="name1">${name}</p>
                </label>
                <input type="text" class="${id} displayNone" id="${id}" placeholder="Rechercher...">
                <i class="bi bi-chevron-down arrowClose"></i>
            </div>
            <div role="listbox" class="containerOption${nb} containerOption dropdown${name} displayNone">
                <ul class="elementList${nb}"></ul>
            </div>
        </div>
    </div>
    `
}
