import React from 'react';
import {shallow} from 'enzyme';

import Home from './home';

it('Renders without crashing', () => {
  shallow(<Home />);
});
