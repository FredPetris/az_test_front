import { List } from 'immutable';
import { combineReducers } from 'redux';

import { ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM, SAVE_GROCERY_ITEM } from './actions';

const initialState = new List([
  { checked: false, name: 'Apples' },
  { checked: false, name: 'Bananas' },
]);

function groceries(state = initialState, action) {
  const { assign } = Object;

  switch (action.type) {
    case ADD_GROCERY_ITEM:
      const { checked } = false;
      return state.push(assign({ checked }, action.item));
    case REMOVE_GROCERY_ITEM:
      return state.delete(action.index);
    case SAVE_GROCERY_ITEM:
      return state.update(action.index, item => assign(item, action.item));
    default:
      return state;
  }
}

export default combineReducers({ groceries });
