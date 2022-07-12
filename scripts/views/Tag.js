// Create a Tag 
export default class Tag 
{
    constructor(name) 
    {
        this._dropDown = document.querySelector('.dropDown');
        this._name = name;
    }

    renderTag ()
    {
    return `  
        <div class="tag tag${this._dropDown}">
            <span class="tagText">${this._name}</span>
            <i class="bi bi-x-circle"></i>
        </div>
    `
    }
}