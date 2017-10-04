import { connect } from 'react-redux';

import {
  addGroceryItem,
  editGroceryItem,
  removeGroceryItem,
  saveEditItem,
  toggleCheckedGroceryItem,
} from 'actions';
import App from 'components/App';

function mapStateToProps({ groceries }) {
  return { groceries };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroceryItem: item => dispatch(addGroceryItem(item)),
    editGroceryItem: (item, index) => dispatch(editGroceryItem(item, index)),
    removeGroceryItem: index => dispatch(removeGroceryItem(index)),
    saveEditItem: (item, name) => dispatch(saveEditItem(item, name)),
    toggleCheckedGroceryItem: index => dispatch(toggleCheckedGroceryItem(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
