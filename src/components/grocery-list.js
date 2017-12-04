import React from 'react';

import AddGroceryForm from "./add-grocery-form"
import './grocery-list.css';

export default function GroceryList(props) {
  const itemList = props.groceries.map( (item) => {
    return <li key={item.id}>{item.name}</li>
  })

  return (
    <main role="main">
      <section className="dark-section full-length">
        <div className="row">
          <h2>Grocery List</h2>
          <ul id="grocery-list">
            {itemList}
          </ul>
        </div>
        <AddGroceryForm />
      </section>
    </main>
  );
};

GroceryList.defaultProps = {
  groceries: [
    { "id": 0, "name": "apples" },
    { "id": 1, "name": "bananas" },
    { "id": 2, "name": "chicken" }
  ]
};
