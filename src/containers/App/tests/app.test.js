import React from 'react';
import {shallow} from 'enzyme';

import {App} from '../index';

it('Renders without crashing', () => {
  shallow(<App />);
});
