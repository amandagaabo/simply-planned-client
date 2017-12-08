import {connect} from 'react-redux';

import {updateMeal} from './actions'
import Layout from './components/layout';

export const mapStateToProps = state => ({
  meals: state.app.meals.meals,
  showSideBar: state.app.meals.showSideBar
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMeal: (date, meal, item) => {
      dispatch(updateMeal(date, meal, item))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
