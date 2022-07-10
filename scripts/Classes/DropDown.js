import { createDropDownMenus } from "../Views/dropDownMenus"

// Create the 3 drop down menus
export const displayDropdownMenus = () => {
    const dropDownMenusArea = document.querySelector(".dropDownMenusArea")

    const dropDownMenu1 = createDropDownMenus('ingredients', 'blueDropDown', 1)
    const dropDownMenu2 = createDropDownMenus('tools', 'greenDropDown', 2)
    const dropDownMenu3 = createDropDownMenus('ustensils', 'salmonDropDown', 3)
    dropDownMenusArea.innerHTML += dropDownMenu1 + dropDownMenu2 + dropDownMenu3

}

// To display the contents of the drop down menus
export const displayDropDownContent = (dropDown, optionContainer, input, arrow, pixel) => {

    if (optionContainer.classList.contains("displayNone")) {
        optionContainer.classList.remove('displayNone')
        optionContainer.classList.add('displayFlex')
        input.classList.remove('displayNone')
        input.classList.add('displayBlock')
        arrow.classList.remove('arrowClose')
        arrow.classList.add('arrowOpen')
        dropDown.style.width = pixel + "px"
        input.focus()
    } else {
        optionContainer.classList.remove('displayFlex')
        optionContainer.classList.add('displayNone')
        input.classList.remove('displayBlock')
        input.classList.add('displayNone')
        arrow.classList.remove('arrowOpen')
        arrow.classList.add('arrowClose')
        dropDown.style.width = "250px"
    }
}