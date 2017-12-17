import React from 'react';
import {Icon} from 'react-fa';

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
      <ul className="edit-menu">
        <li className="dropdown">
          <a href="no-javascript.html" class="dropbtn"><Icon name="trash-o" /></a>
          <div className="dropdown-content">
            <a href="no-javascript.html" onClick={onRemoveButtonClick}>Delete Crossed Items</a>
          </div>
        </li>
      </ul>

      <h2 className="list-header">Grocery List</h2>

      <ul className="grocery-list">
        {itemList}
      </ul>

      <AddGroceryForm onAddGroceryItem={values => props.onAddGroceryItem(props.authToken, values)}/>


    </div>
  );

};
