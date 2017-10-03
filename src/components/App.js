import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

class App extends Component {
  static propTypes = {
    groceries: PropTypes.instanceOf(Immutable.List),
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.addGroceryItem({ checked: false, name: event.target.value });
      event.target.value = '';
    }
  };

  render() {
    const { groceries } = this.props;

    return (
      <div className="app">
        <h1>My groceries :</h1>
        <input type="text" onKeyPress={this.onKeyPress} placeholder="Add an item..." />
        <ul>{groceries.map(item => <li>{item.name}</li>)}</ul>
      </div>
    );
  }
}

export default App;
