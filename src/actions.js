export const ADD_GROCERY_ITEM = 'ADD_GROCERY_ITEM';

export function addGroceryItem(item) {
  return { type: ADD_GROCERY_ITEM, item };
}
