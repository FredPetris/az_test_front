import { connect } from 'react-redux';

import { addGroceryItem, removeGroceryItem, saveGroceryItem } from 'actions';
import App from 'components/App';

function mapStateToProps({ groceries }) {
  return { groceries };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroceryItem: item => dispatch(addGroceryItem(item)),
    removeGroceryItem: index => dispatch(removeGroceryItem(index)),
    saveGroceryItem: (index, item) => dispatch(saveGroceryItem(index, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
