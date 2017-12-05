import React from 'react';
import {connect} from 'react-redux';
import {removeCheckedItems, toggleChecked} from '../actions';
import AddGroceryForm from './add-grocery-form';
import './grocery-list.css';

export function GroceryList(props) {
  function onItemClick(e) {
    const id= e.target.id;
    props.dispatch(toggleChecked(id));
  };

  function onButtonClick(e) {
    props.dispatch(removeCheckedItems());
  }

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
        <AddGroceryForm />
        <button type="button" onClick={onButtonClick}>Remove crossed out items</button>
      </section>
    </main>
  );
};

export const mapStateToProps = state => ({
  groceries: state.app.groceries
});

export default connect(mapStateToProps)(GroceryList);
