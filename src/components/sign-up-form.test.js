import React from 'react';
import {shallow} from 'enzyme';

import SignUpForm from './sign-up-form';

it('Renders without crashing', () => {
  shallow(<SignUpForm />);
});
