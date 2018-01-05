import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../layout';

const groceries = [
  { id: 123, name: 'apples', checked: true },
  { id: 456, name: 'bread', checked: true },
  { id: 789, name: 'bananas', checked: true }
];

describe('Groceries <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout groceries={groceries} />);
  });

  it('Calls onRemoveItems function when delete crossed items is clicked', () => {
    const onRemoveItems = jest.fn();
    const wrapper = shallow(<Layout groceries={groceries} onRemoveItems={onRemoveItems} />);
    global.confirm = () => true;
    wrapper.find('.remove-items').simulate('click');
    expect(onRemoveItems).toHaveBeenCalledTimes(1);
  });
});
