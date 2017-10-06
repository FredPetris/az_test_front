import React, { Component } from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

class Item extends Component {
  static propTypes = {
    groceries: PropTypes.instanceOf(List),
    item: PropTypes.instanceOf(Object),
  };

  constructor(props) {
    super(props);
    this.state = { isEditing: false };
  }

  onRemove(item) {
    this.props.removeGroceryItem(item);
  }

  onStartEdit() {
    this.setState({ isEditing: true });
  }

  onSave(event, { id }) {
    if (event.key === 'Enter') {
      const name = event.target.value;
      this.props.saveGroceryItem(id, { name });
      this.setState({ isEditing: false });
    }
  }

  onChecked(event, { id }) {
    const checked = event.target.checked;
    this.props.saveGroceryItem(id, { checked });
    this.forceUpdate();
  }

  _renderItemName(item) {
    if (this.state.isEditing) {
      return (
        <input
          type="text"
          className="input-item-name"
          onKeyPress={event => this.onSave(event, item)}
          defaultValue={item.name}
          placeholder="Edit item..."
        />
      );
    } else {
      return (
        <span className="fake-input-item-name">
          <em>{item.name}</em>
          <i className="icon-edit" onClick={this.onStartEdit}>
            &#9998;
          </i>
        </span>
      );
    }
  }

  render() {
    const item = this.props.item;
    const inputName = this._renderItemName(item);
    return (
      <li>
        <input
          type="checkbox"
          checked={item.checked}
          onChange={event => this.onChecked(event, item)}
        />

        {inputName}

        <i className="icon-remove" onClick={() => this.onRemove(item)}>
          &#10007;
        </i>
      </li>
    );
  }
}

export default Item;
