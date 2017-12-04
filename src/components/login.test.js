import React from 'react';
import {shallow} from 'enzyme';

import Login from './login';

it('Renders without crashing', () => {
  shallow(<Login />);
});
