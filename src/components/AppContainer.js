import { connect } from 'react-redux';

import { addGroceryItem } from 'actions';
import App from 'components/App';

function mapStateToProps({ groceries }) {
  return { groceries };
}

function mapDispatchToProps(dispatch) {
  return {
    addGroceryItem: item => dispatch(addGroceryItem(item)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
