export const createTags = (name, dropDownItem) => {
    return `  
        <div class="tag tag${dropDownItem}">
            <span class="tagText">${name}</span>
            <i class="bi bi-x-circle"></i>
        </div>
    `
}