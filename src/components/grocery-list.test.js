import React from 'react';
import {shallow} from 'enzyme';

import GroceryList from './grocery-list';

it('Renders without crashing', () => {
    shallow(<GroceryList />);
});
