import React from 'react';
import {shallow} from 'enzyme';

import {GroceryList} from './grocery-list';

it('Renders without crashing', () => {
  const groceries = [
    { id: 0, name: "apples" },
    { id: 1, name: "bananas" }
  ]

  shallow(<GroceryList groceries={groceries}/>);
});
