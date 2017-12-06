import React from 'react';
import {shallow} from 'enzyme';

import {Meals} from '../index';

it('Renders without crashing', () => {
  const meals = [
    {
      date: "2017-12-03",
      breakfast: "oatmeal",
      lunch: "grilled chicken salad",
      dinner: "burger and sweet potato fries"
    }
  ]

  shallow(<Meals meals={meals}/>);
});
