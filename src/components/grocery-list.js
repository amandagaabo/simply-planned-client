import React from 'react';
import {connect} from 'react-redux';

import AddGroceryForm from "./add-grocery-form"
import './grocery-list.css';

export function GroceryList(props) {
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


export const mapStateToProps = state => ({
  groceries: state.app.groceries
});

export default connect(mapStateToProps)(GroceryList);
