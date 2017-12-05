import React from 'react';
import {connect} from 'react-redux';

import moment from 'moment';
import {Icon} from 'react-fa';

import './meals-nav.css';

export function MealsNav(props) {
  let pageTitle = "";
  const startDayString = props.meals[0].date;
  const endDayString = props.meals[props.meals.length - 1].date;

  const startMonth = moment(startDayString).format('MMMM');
  const endMonth = moment(endDayString).format('MMMM')

  const startDay = moment(startDayString).format('Do');
  const endDay = moment(endDayString).format('Do');

  if (startDayString === endDayString) {
    pageTitle = `${startMonth} ${startDay}`
  } else if (startMonth === endMonth) {
    pageTitle = `${startMonth} ${startDay} - ${endDay}`
  } else {
    pageTitle = `${startMonth} ${startDay} - ${endMonth} ${endDay}`
  }

  return (
    <div className="calendar-nav col-12">
      <div className="today">
        <a href="">today</a>
      </div>

      <div className="prev">
        <a href=""><Icon name="chevron-left" /></a>
      </div>

      <div className="next">
        <a href=""><Icon name="chevron-right" /></a>
      </div>

      <div className="title">
        <h2>{pageTitle}</h2>
      </div>
    </div>
  );
}

  export const mapStateToProps = state => ({
    meals: state.app.meals
  });

  export default connect(mapStateToProps)(MealsNav)
