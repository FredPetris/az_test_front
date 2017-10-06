import { List } from 'immutable';
import { combineReducers } from 'redux';

import { ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM, SAVE_GROCERY_ITEM } from './actions';
import GroceryRecord from './records/GroceryRecord';

const initialState = new List([
  new GroceryRecord({ name: 'Apples' }),
  new GroceryRecord({ name: 'Bananas' }),
]);

function groceries(state = initialState, action) {
  const { keys, values } = Object;

  switch (action.type) {
    case ADD_GROCERY_ITEM:
      const { item } = action;
      return state.push(new GroceryRecord(item));
    case REMOVE_GROCERY_ITEM:
      return state.delete(action.index);
    case SAVE_GROCERY_ITEM:
      return state.update(action.index, item =>
        item.mergeIn(keys(action.item), values(action.item)),
      );
    default:
      return state;
  }
}

export default combineReducers({ groceries });
