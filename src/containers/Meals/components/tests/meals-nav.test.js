import React from 'react';
import {shallow} from 'enzyme';
import MealsNav from '../meals-nav';

const meals = [
  {
    date: "2017-12-03",
    breakfast: "oatmeal",
    lunch: "grilled chicken salad",
    dinner: "burger and sweet potato fries"
  }
]

describe('<MealsNav />', () => {
  it('Renders without crashing', () => {
    shallow(<MealsNav meals={meals}/>);
  });

  it('Renders the meals navigation bar', () => {
    const wrapper = shallow(<MealsNav meals={meals}/>);
    expect(wrapper.hasClass('calendar-nav')).toBe(true);
  });

  it('Calls the onGetMeals function when prev button is clicked', () => {
    const onGetMeals = jest.fn();
    const wrapper = shallow(<MealsNav meals={meals} onGetMeals={onGetMeals}/>);
    wrapper.find('.prev').simulate('click');
    expect(onGetMeals).toHaveBeenCalledTimes(1);
  });

  it('Calls the onGetMeals function when next button is clicked', () => {
    const onGetMeals = jest.fn();
    const wrapper = shallow(<MealsNav meals={meals} onGetMeals={onGetMeals}/>);
    wrapper.find('.next').simulate('click');
    expect(onGetMeals).toHaveBeenCalledTimes(1);
  });

  it('Calls the onGetMeals function when next button is clicked', () => {
    const onGetMeals = jest.fn();
    const wrapper = shallow(<MealsNav meals={meals} onGetMeals={onGetMeals}/>);
    wrapper.find('.today').simulate('click');
    expect(onGetMeals).toHaveBeenCalledTimes(1);
  });
});
