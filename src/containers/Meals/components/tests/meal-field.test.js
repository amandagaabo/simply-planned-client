import React from 'react';
import {shallow} from 'enzyme';
import MealField from '../meal-field';


describe('<MealField />', () => {
  it('Renders without crashing', () => {
    shallow(<MealField />);
  });

  it('Renders a meal', () => {
    const mealType = "lunch";
    const mealDate = "2017-12-12";

    const wrapper = shallow(<MealField mealType={mealType} mealDate={mealDate}/>);
    expect(wrapper.hasClass('meal')).toBe(true);
    expect(wrapper.hasClass(mealType)).toBe(true);
  });

  it.skip('Calls handle change', () => {
    const onUpdateMeal = jest.fn();
    const wrapper = shallow(<MealField onUpdateMeal={onUpdateMeal} />);
    wrapper.find('textarea').simulate('change');
    expect(onUpdateMeal).toHaveBeenCalledTimes(1);
  });
});
