import React from 'react';

import AddGroceryForm from './add-grocery-form';
import './layout.css';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.onItemClick = this.onItemClick.bind(this);
  }

  componentDidMount() {
    this.props.onLoad(this.props.userId)
  }

  onItemClick(e) {
    const id= e.target.id;
    this.props.onToggle(id);
  };

  render() {
    const itemList = this.props.groceries.map( (item) => {
      return <li
        key={item.id}
        id={item.id}
        className={item.checked ? "checked" : "not-checked"}
        onClick={this.onItemClick}>
        {item.name}
      </li>
    })

    return (
          <div className="row">
            <h2>Grocery List</h2>
            <ul className="grocery-list">
              {itemList}
            </ul>

            <AddGroceryForm onAddGroceryItem={this.props.onAddGroceryItem}/>

            <p className="remove-items" onClick={this.props.onRemoveItems}>Remove crossed out items</p>
          </div>
    );

  }

};
