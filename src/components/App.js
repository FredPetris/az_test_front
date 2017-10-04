import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

class App extends Component {
  static propTypes = {
    groceries: PropTypes.instanceOf(Immutable.List),
  };

  onKeyPress = event => {
    if (event.key === 'Enter') {
      this.props.addGroceryItem({ checked: false, name: event.target.value, isEditing: false });
      event.target.value = '';
    }
  };

  onRemove = item => {
    this.props.removeGroceryItem(item);
  };

  onEdit = (item, index) => {
    this.props.editGroceryItem(item, index);
    this.forceUpdate();
  };

  onSaveEdit = (item, event) => {
    if (event.key === 'Enter') {
      this.props.saveEditItem(item, event.target.value);
      event.target.value = '';
      this.forceUpdate();
    }
  };

  render() {
    const { groceries } = this.props;
    let editItem = (item, index) => {
      if (item.isEditing) {
        return (
          <li onDoubleClick={() => this.onEdit(item, index)}>
            <input
              type="text"
              onKeyPress={event => this.onSaveEdit(item, event)}
              defaultValue={item.name}
            />
          </li>
        );
      } else {
        return (
          <li onDoubleClick={() => this.onEdit(item, index)}>
            {item.name}
            &nbsp;
            <a href="#" onClick={() => this.onRemove(index)}>
              Remove
            </a>
          </li>
        );
      }
    };

    return (
      <div className="app">
        <h1>My groceries :</h1>
        <input
          type="text"
          onKeyPress={event => this.onKeyPress(event)}
          placeholder="Add an item..."
        />
        <ul>{groceries.map(editItem)}</ul>
      </div>
    );
  }
}

export default App;
