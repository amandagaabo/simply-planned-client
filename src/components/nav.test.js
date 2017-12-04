import React from 'react';
import {shallow} from 'enzyme';

import Nav from './nav';

it('Renders without crashing', () => {
    shallow(<Nav />);
});
