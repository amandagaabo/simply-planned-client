import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../layout';

const meals = [
  {
    date: "2017-12-03",
    breakfast: "oatmeal",
    lunch: "grilled chicken salad",
    dinner: "burger and sweet potato fries"
  },
  {
    date: "2017-12-04",
    breakfast: "cereal",
    lunch: "soup",
    dinner: "pasta"
  }
]

describe('Meals <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout meals={[]}/>);
  });

  it('Renders the meals', () => {
    const wrapper = shallow(<Layout meals={meals} />);
    expect(wrapper.find('.meal-container')).toHaveLength(meals.length)
  });
});
