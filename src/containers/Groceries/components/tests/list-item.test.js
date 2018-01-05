import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../list-item';

describe('Groceries <ListItem />', () => {
  const item = {
    id: 123,
    className: 'checked'
  };

  it('Renders without crashing', () => {
    shallow(<ListItem item={item} />);
  });
});
