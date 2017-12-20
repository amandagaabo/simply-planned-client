import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import {
  removeCheckedItems,
  toggleChecked,
  addGroceryItem,
  fetchGroceries
} from './actions';
import Layout from './components/layout';

export class Groceries extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.authToken);
  }

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <Layout {...this.props} />
    );
  }
}

export const mapStateToProps = state => ({
  groceries: state.app.groceries.groceries,
  loggedIn: state.app.auth.authToken !== null,
  authToken: state.app.auth.authToken
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onAddGroceryItem: (authToken, formData) => {
      dispatch(addGroceryItem(authToken, formData.item));
      dispatch(reset('add-item'));
    },
    onToggle: (token, itemID, checked) => {
      dispatch(toggleChecked(token, itemID, checked));
    },
    onRemoveItems: (token) => {
      dispatch(removeCheckedItems(token));
    },
    onLoad: (token) => {
      dispatch(fetchGroceries(token));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Groceries);
