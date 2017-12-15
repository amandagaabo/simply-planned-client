import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import {fetchMeals, updateMeal} from './actions'
import Layout from './components/layout';

export class Meals extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.authToken, this.props.sunday)
  }

  render() {
    console.log('meal props', this.props)
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <Layout {...this.props} />
    )
  }
};

export const mapStateToProps = state => ({
  meals: state.app.meals.meals,
  loggedIn: state.app.auth.authToken !== null,
  authToken: state.app.auth.authToken,
  sunday: state.app.meals.sunday
});

export const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateMeal: (date, meal, item) => {
      dispatch(updateMeal(date, meal, item))
    },
    onLoad: (token, sunday) => {
      dispatch(fetchMeals(token, sunday))
    },
    onGetMeals: (token, sunday) => {
      dispatch(fetchMeals(token, sunday))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Meals)
