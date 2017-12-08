import React from 'react';
import {shallow} from 'enzyme';

import Dashboard from './dashboard';

it('Renders without crashing', () => {
  shallow(<Dashboard />);
});
