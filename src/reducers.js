import { List } from 'immutable';
import { combineReducers } from 'redux';
import uuid from 'uuid/v4';

import { ADD_GROCERY_ITEM, REMOVE_GROCERY_ITEM, SAVE_GROCERY_ITEM } from './actions';
import GroceryRecord from './records/GroceryRecord';

const initialState = new List([
  new GroceryRecord({ id: uuid(), name: 'Apples' }),
  new GroceryRecord({ id: uuid(), name: 'Bananas' }),
]);

function groceries(state = initialState, action) {
  const { assign } = Object;
  const { item } = action;
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return state.push(new GroceryRecord(assign({}, item, { id: uuid() })));
    case REMOVE_GROCERY_ITEM:
      console.log(item, state.indexOf(item));
      return state.delete(state.indexOf(item));
    case SAVE_GROCERY_ITEM:
      const { id } = action;
      return state.update(groceries =>
        groceries.map(grocery => (grocery.id === id ? grocery.merge(item) : grocery)),
      );
    default:
      return state;
  }
}

export default combineReducers({ groceries });
