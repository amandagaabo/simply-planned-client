import React from 'react';
import moment from 'moment';
import {Icon} from 'react-fa';

import './meals-nav.css';

export default function MealsNav(props) {
  function onTodayClick() {
    const sunday = moment().startOf('week').toISOString();
    console.log('today clicked, sunday:', sunday)
    props.onGetMeals(props.authToken, sunday);
  };

  function onPrevClick() {
    const sunday = moment(props.sunday).subtract(7,'d').toISOString()
    console.log('prev clicked, sunday:', sunday)
    props.onGetMeals(props.authToken, sunday);
  };

  function onNextClick() {
    const sunday = moment(props.sunday).add(7,'d').toISOString()
    console.log('next clicked, sunday:', sunday)
    props.onGetMeals(props.authToken, sunday);
  };

  // page title calcs
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

  // render nav
  return (
    <div className="calendar-nav">
      <div className="col-12 title">
        <h2>{pageTitle}</h2>
      </div>
      <div className="col-12 nav-buttons">
        <button className="today" onClick={onTodayClick}>today</button>
        <button className="prev" onClick={onPrevClick}><Icon name="chevron-left" /></button>
        <button className="next"onClick={onNextClick}><Icon name="chevron-right" /></button>
      </div>
    </div>
  );
}
