import React from 'react';
import moment from 'moment';
import { Icon } from 'react-fa';
import './meals-nav.css';

export default function MealsNav(props) {
  function onTodayClick() {
    const sunday = moment().startOf('week').toISOString();
    props.onGetMeals(props.authToken, sunday);
  }

  function onPrevClick() {
    const sunday = moment(props.sunday).subtract(7, 'd').toISOString();
    props.onGetMeals(props.authToken, sunday);
  }

  function onNextClick() {
    const sunday = moment(props.sunday).add(7, 'd').toISOString();
    props.onGetMeals(props.authToken, sunday);
  }

  // page title calcs
  let pageTitle = '';
  const startDayString = props.meals[0].date;
  const endDayString = props.meals[props.meals.length - 1].date;

  const startMonth = moment(startDayString).format('MMMM');
  const endMonth = moment(endDayString).format('MMMM');

  const startDay = moment(startDayString).format('Do');
  const endDay = moment(endDayString).format('Do');

  if (startDayString === endDayString) {
    pageTitle = `${startMonth} ${startDay}`;
  } else if (startMonth === endMonth) {
    pageTitle = `${startMonth} ${startDay} - ${endDay}`;
  } else {
    pageTitle = `${startMonth} ${startDay} - ${endMonth} ${endDay}`;
  }

  // disable this week button if on this week
  let thisWeek;
  const thisWeekStart = moment().startOf('week').toISOString();
  if (startDayString === thisWeekStart) {
    thisWeek =
      <button disabled className="today" onClick={onTodayClick} value="today">this week</button>;
  } else {
    thisWeek =
      <button className="today" onClick={onTodayClick} aria-label="today">this week</button>;
  }

  return (
    <div className="calendar-nav">
      <div className="col-12 title">
        <h2>{pageTitle}</h2>
      </div>
      <div className="col-12 nav-buttons">
        <button
          className="prev"
          onClick={onPrevClick}
          aria-label="previous"
        >
          <Icon name="chevron-left" />
        </button>
        {thisWeek}
        <button
          className="next"
          onClick={onNextClick}
          aria-label="next"
        >
          <Icon name="chevron-right" />
        </button>
      </div>
    </div>
  );
}
