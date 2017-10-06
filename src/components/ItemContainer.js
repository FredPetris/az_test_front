import { connect } from 'react-redux';

import { removeGroceryItem, saveGroceryItem } from 'actions';
import Item from 'components/Item';

function mapStateToProps({ groceries }, { item }) {
  return { groceries, item };
}

function mapDispatchToProps(dispatch) {
  return {
    removeGroceryItem: item => dispatch(removeGroceryItem(item)),
    saveGroceryItem: (id, item) => dispatch(saveGroceryItem(id, item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
