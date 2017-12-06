import React from 'react';
import {connect} from 'react-redux';

import {updateMeal, toggleSideBar} from './actions'
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
  meals: state.app.meals.meals,
  showSideBar: state.app.meals.showSideBar
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMeal: (date, meal, item) => {
      dispatch(updateMeal(date, meal, item))
    },
    onToggleSideBar: () => {
      dispatch(toggleSideBar())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
