import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';

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

  onRemove = item => {
    this.props.removeGroceryItem(item);
  };

  onStartEdit = index => {
    this.props.saveGroceryItem(index, { isEditing: true });
    this.forceUpdate();
  };

  onSave = (index, event) => {
    if (event.key === 'Enter') {
      const name = event.target.value;
      this.props.saveGroceryItem(index, { name, isEditing: false });
      this.forceUpdate();
    }
  };

  onChecked = (index, event) => {
    const checked = event.target.checked;
    this.props.saveGroceryItem(index, { checked });
    this.forceUpdate();
  };

  _renderItemName = (item, index) => {
    if (item.isEditing) {
      return (
        <input
          type="text"
          className="input-item-name"
          onKeyPress={this.onSave.bind(this, index)}
          defaultValue={item.name}
          placeholder="Edit item..."
        />
      );
    } else {
      return (
        <span className="fake-input-item-name">
          <em>{item.name}</em>
          <i className="icon-edit" onClick={this.onStartEdit.bind(this, index)}>
            &#9998;
          </i>
        </span>
      );
    }
  };

  _renderItem = (item, index) => {
    const inputName = this._renderItemName(item, index);
    return (
      <li key={index}>
        <input type="checkbox" checked={item.checked} onChange={this.onChecked.bind(this, index)} />

        {inputName}

        <i className="icon-remove" onClick={this.onRemove.bind(this, index)}>
          &#10007;
        </i>
      </li>
    );
  };

  render() {
    const { groceries } = this.props;

    return (
      <div className="app">
        <h1>My groceries :</h1>
        <input type="text" onKeyPress={this.onAdd} placeholder="Add an item..." />
        <ul>{groceries.map(this._renderItem.bind(this))}</ul>
      </div>
    );
  }
}

export default App;
