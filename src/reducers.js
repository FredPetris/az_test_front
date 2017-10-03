import Immutable from 'immutable';
import { combineReducers } from 'redux';
import { ADD_GROCERY_ITEM } from './actions';

const initialState = new Immutable.List([
  { checked: false, name: 'Apples' },
  { checked: false, name: 'Bananas' },
]);

function groceries(state = initialState, action) {
  switch (action.type) {
    case ADD_GROCERY_ITEM:
      return state.push(action.item);
    default:
      return state;
  }
}

export default combineReducers({
  groceries,
});
