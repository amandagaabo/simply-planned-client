import React from 'react';
import {connect} from 'react-redux';
import {reset} from 'redux-form';

import {removeCheckedItems, toggleChecked, addGroceryItem} from './actions';
import Layout from './components/layout';

export class Groceries extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Layout {...this.props} />
    );
  }
};

export const mapStateToProps = state => ({
  groceries: state.app.groceries.groceries
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddGroceryItem: (formData) => {
      dispatch(addGroceryItem(formData.item))
      dispatch(reset('add-item'))
    },
    onToggle: id => {
      dispatch(toggleChecked(id))
    },
    onRemoveItems: () => dispatch(removeCheckedItems())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Groceries);
