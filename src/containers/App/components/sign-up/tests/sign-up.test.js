import React from 'react';
import {shallow} from 'enzyme';

import SignUp from './../sign-up';

it('Renders without crashing', () => {
  shallow(<SignUp />);
});
