import { connect } from 'react-redux';

import { removeGroceryItem, saveGroceryItem } from 'actions';
import Item from 'components/Item';

function mapStateToProps({ groceries }, { item, index }) {
  return { groceries, item, index };
}

function mapDispatchToProps(dispatch) {
  return {
    removeGroceryItem: index => dispatch(removeGroceryItem(index)),
    saveGroceryItem: (index, item) => dispatch(saveGroceryItem(index, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
