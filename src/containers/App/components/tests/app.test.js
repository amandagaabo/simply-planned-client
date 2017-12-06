import React from 'react';
import {shallow} from 'enzyme';

import App from '../app';

it('Renders without crashing', () => {
  shallow(<App />);
});
