import Immutable from 'immutable';
import { combineReducers } from 'redux';

import {
  ADD_GROCERY_ITEM,
  EDIT_GROCERY_ITEM,
  REMOVE_GROCERY_ITEM,
  SAVE_EDIT_GROCERY_ITEM,
  TOGGLE_CHECKED_GROCERY_ITEM,
} from './actions';

const initialState = new Immutable.List([
  { checked: false, name: 'Apples', isEditing: false },
  { checked: false, name: 'Bananas', isEditing: false },
]);

function groceries(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return state.push(action.item);
    case REMOVE_GROCERY_ITEM:
      return state.delete(action.index);
    case EDIT_GROCERY_ITEM:
      return state
        .update(item => {
          item.isEditing = false;
          return item;
        })
        .update(action.index, item => {
          item.isEditing = true;
          return item;
        });

    case SAVE_EDIT_GROCERY_ITEM:
      const index = state.indexOf(action.item);
      const save = state.update(index, item => {
        item.name = action.name;
        item.isEditing = false;
        return item;
      });
      return save;

    case TOGGLE_CHECKED_GROCERY_ITEM:
      return state.update(action.index, item => {
        item.checked = !item.checked;
        return item;
      });
    default:
      return state;
  }
}

export default combineReducers({ groceries });
