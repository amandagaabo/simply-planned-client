import React from 'react';

import AddGroceryForm from './add-grocery-form';
import './layout.css';

export default function Layout(props) {

  function onItemClick(e) {
    const id= e.target.id;
    const checked = e.target.className === 'checked';
    props.onToggle(props.authToken, id, checked);
  };

  function onRemoveButtonClick() {
    props.onRemoveItems(props.authToken)
  }

  const itemList = props.groceries.map( (item) => {
    return <li
      key={item.id}
      id={item.id}
      className={item.checked ? "checked" : "not-checked"}
      onClick={e => onItemClick(e)}>
      {item.name}
    </li>
  })


  return (
    <div className="row">
      <h2>Grocery List</h2>
      <ul className="grocery-list">
        {itemList}
      </ul>

      <AddGroceryForm onAddGroceryItem={values => props.onAddGroceryItem(props.authToken, values)}/>

      <button className="remove-items" onClick={onRemoveButtonClick}>Remove crossed out items</button>
    </div>
  );

};
