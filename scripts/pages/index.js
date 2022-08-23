import {recipes} from '../../data/recipes.js';

import FilterByAppliances from '../classes/FilterByAppliances.js';
import FilterByIngredients from '../classes/FilterByIngredients.js';
import FilterByUstensils from '../classes/FilterByUstensils.js';

import List from '../classes/List.js';

const list = new List(recipes);
list.display(list.all);

const filterIngredients =  new FilterByIngredients(list);
const filterAppliances =  new FilterByAppliances(list);
const filterUstensils = new FilterByUstensils(list);

list.addFilter(filterIngredients);
list.addFilter(filterAppliances);
list.addFilter(filterUstensils);

list.listenForSearch();




