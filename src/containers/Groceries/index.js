import {connect} from 'react-redux';
import {reset} from 'redux-form';

import {
  removeCheckedItems,
  toggleChecked,
  addGroceryItem,
  fetchGroceries
} from './actions';
import Layout from './components/layout';

export const mapStateToProps = state => ({
  groceries: state.app.groceries.groceries,
  userId: state.app.sessions.userId
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
    onRemoveItems: () => dispatch(removeCheckedItems()),
    onLoad: userId => dispatch(fetchGroceries(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
