import React from 'react';

import AddGroceryForm from './add-grocery-form';
import './layout.css';

export default function Layout(props) {
  function onItemClick(e) {
    const id= e.target.id;
    props.onToggle(id);
  };

  const itemList = props.groceries.map( (item) => {
    return <li
      key={item.id}
      id={item.id}
      className={item.checked ? "checked" : "not-checked"}
      onClick={onItemClick}>
      {item.name}
    </li>
  })

  return (
    <main role="main">
      <section className="dark-section full-length">
        <div className="row">
          <h2>Grocery List</h2>
          <ul className="grocery-list">
            {itemList}
          </ul>
        </div>
        <AddGroceryForm onAddGroceryItem={props.onAddGroceryItem}/>
        <button type="button" onClick={props.onRemoveItems}>Remove crossed out items</button>
      </section>
    </main>
  );
};
