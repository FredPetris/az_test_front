export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';
export const REMOVE_GROCERY_ITEM = 'REMOVE_GROCERY_ITEM';
export const SAVE_GROCERY_ITEM = 'SAVE_GROCERY_ITEM';

export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}

export function removeGroceryItem(item) {
  return { type: REMOVE_GROCERY_ITEM, item };
}

export function saveGroceryItem(id, item) {
  return { type: SAVE_GROCERY_ITEM, id, item };
}
