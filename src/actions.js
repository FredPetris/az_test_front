export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const EDIT_GROCERY_ITEM = 'EDIT_GROCERY_ITEM';
export const REMOVE_GROCERY_ITEM = 'REMOVE_GROCERY_ITEM';
export const SAVE_EDIT_GROCERY_ITEM = 'SAVE_EDIT_GROCERY_ITEM';

export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}

export function editGroceryItem(item, index) {
  return { type: EDIT_GROCERY_ITEM, item, index };
}

export function removeGroceryItem(index) {
  return { type: REMOVE_GROCERY_ITEM, index };
}

export function saveEditItem(item, name) {
  return { type: SAVE_EDIT_GROCERY_ITEM, item, name };
}
