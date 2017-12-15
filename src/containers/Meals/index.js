import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import _ from 'lodash';

import {fetchMeals, updateMealServer, updateMealClient} from './actions'
import Layout from './components/layout';

export class Meals extends React.Component {
  componentDidMount() {
    this.props.onLoad(this.props.authToken, this.props.sunday)
  }

  render() {
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
  const sync = _.debounce( (token, date, name, item) => {
    dispatch(updateMealServer(token, date, name, item));
  }, 500 )

  return {
    onUpdateMeal: (token, date, name, item) => {
      dispatch(updateMealClient(date, name, item));
      sync(token, date, name, item);
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
