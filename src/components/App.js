import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import ItemContainer from './ItemContainer';

class App extends Component {
  static propTypes = {
    groceries: PropTypes.instanceOf(List),
  };

  onAdd = event => {
    if (event.key === 'Enter') {
      const name = event.target.value;
      this.props.addGroceryItem({ name });
      event.target.value = '';
    }
  };

  render() {
    const { groceries } = this.props;
    return (
      <div className="app">
        <h1>My groceries :</h1>
        <input type="text" onKeyPress={this.onAdd} placeholder="Add an item..." />
        <ul>
          {groceries.map((item, index) => <ItemContainer key={index} item={item} index={index} />)}
        </ul>
      </div>
    );
  }
}

export default App;
