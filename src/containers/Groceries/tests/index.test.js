import React from 'react';
import {shallow} from 'enzyme';

import {Groceries} from '../index';

it('Renders without crashing', () => {
  shallow(<Groceries />);
});
