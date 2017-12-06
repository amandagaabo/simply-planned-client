import React from 'react';
import {connect} from 'react-redux';

import {updateMeal} from './actions'
import Layout from './components/layout';

export class Meals extends React.Component {
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
  meals: state.app.meals.meals
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMeal: (date, meal, item) => {
      dispatch(updateMeal(date, meal, item))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
