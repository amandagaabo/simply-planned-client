import React from 'react';
import { Icon } from 'react-fa';
import AddGroceryForm from './add-grocery-form';
import ListItem from './list-item';
import './layout.css';

export default function Layout(props) {
  function onRemoveButtonClick() {
    const confirmDelete = window.confirm('Delete all crossed off items?');
    if (confirmDelete) {
      props.onRemoveItems(props.authToken);
    }
  }

  const itemList = props.groceries.map((item) => {
    return (
      <ListItem key={item.id} item={item} {...props} />
    );
  });

  return (
    <div className="row">
      <div>
        <span
          className="remove-items"
          onClick={onRemoveButtonClick}
          role="button"
          tabIndex={0}
          onKeyPress={onRemoveButtonClick}
        >
          <Icon name="trash-o" />
        </span>
      </div>

      <h2 className="list-header">Grocery List</h2>

      <ul className="grocery-list">
        {itemList}
      </ul>

      <AddGroceryForm
        onAddGroceryItem={values => props.onAddGroceryItem(props.authToken, values)}
      />
    </div>
  );
}
