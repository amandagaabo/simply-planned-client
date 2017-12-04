import React from 'react';
import {shallow} from 'enzyme';

import Meals from './meals';

it('Renders without crashing', () => {
    shallow(<Meals />);
});
