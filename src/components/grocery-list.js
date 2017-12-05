import React from 'react';
import {connect} from 'react-redux';
import {removeGroceryItem} from '../actions';
import AddGroceryForm from './add-grocery-form';
import './grocery-list.css';

export function GroceryList(props) {
  function onClick(e) {
    const id= e.target.id;
    props.dispatch(removeGroceryItem(id));
  };

  const itemList = props.groceries.map( (item) => {
    return <li key={item.id} id={item.id} onClick={onClick}>{item.name}</li>
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
      </section>
    </main>
  );
};

export const mapStateToProps = state => ({
  groceries: state.app.groceries
});

export default connect(mapStateToProps)(GroceryList);
