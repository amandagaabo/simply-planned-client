import {connect} from 'react-redux';

import {fetchMeals, updateMeal} from './actions'
import Layout from './components/layout';

export const mapStateToProps = state => ({
  meals: state.app.meals.meals,
  showSideBar: state.app.meals.showSideBar,
  authToken: state.app.auth.authToken
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMeal: (date, meal, item) => {
      dispatch(updateMeal(date, meal, item))
    },
    onLoad: (token) => {
      dispatch(fetchMeals(token))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
