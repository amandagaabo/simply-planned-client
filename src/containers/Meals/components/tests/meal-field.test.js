import React from 'react';
import {shallow} from 'enzyme';

import MealField from '../meal-field';

it('Renders without crashing', () => {
  shallow(<MealField />);
});
