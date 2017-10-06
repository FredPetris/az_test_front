import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    groceries: PropTypes.instanceOf(List),
    item: PropTypes.instanceOf(Object),
    index: PropTypes.instanceOf(Number),
  };

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  onRemove = item => {
    this.props.removeGroceryItem(item);
  };

  onStartEdit() {
    this.setState({ isEditing: true });
  }

  onSave(index, event) {
    if (event.key === 'Enter') {
      const name = event.target.value;
      this.props.saveGroceryItem(index, { name });
      this.setState({ isEditing: false });
    }
  }

  onChecked = (index, event) => {
    const checked = event.target.checked;
    this.props.saveGroceryItem(index, { checked });
    this.forceUpdate();
  };

  _renderItemName(item, index) {
    if (this.state.isEditing) {
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
  }

  render() {
    const item = this.props.item;
    const index = this.props.index;
    const inputName = this._renderItemName(item, index);
    return (
      <li>
        <input type="checkbox" checked={item.checked} onChange={this.onChecked.bind(this, index)} />

        {inputName}

        <i className="icon-remove" onClick={this.onRemove.bind(this, index)}>
          &#10007;
        </i>
      </li>
    );
  }
}

export default Item;
