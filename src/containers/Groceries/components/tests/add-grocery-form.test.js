import React from 'react';
import {shallow} from 'enzyme';

import AddGroceryForm from '../add-grocery-form';

it('Renders without crashing', () => {
  shallow(<AddGroceryForm />);
});
