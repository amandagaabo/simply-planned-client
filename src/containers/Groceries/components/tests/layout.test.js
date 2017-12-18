import React from 'react';
import {shallow} from 'enzyme';
import Layout from '../layout';

const groceries = [
  {id: 123, name:'apples', checked: true},
  {id: 456, name:'bread', checked: true},
  {id: 789, name:'bananas', checked: true}
];

describe('Groceries <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout groceries={groceries} />);
  });

  it('Renders the groceries', () => {

    const wrapper = shallow(<Layout groceries={groceries} />);
    expect(wrapper.find('.grocery-list li')).toHaveLength(groceries.length)
  });

  it.skip('Calls onToggle function when item is clicked', () => {
    const onToggle = jest.fn();
    const wrapper = shallow(<Layout groceries={groceries} />);
    wrapper.find('.grocery-list li').first().simulate('click');
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('Calls onRemoveItems function when delete crossed items is clicked', () => {
    const onRemoveItems = jest.fn();
    const wrapper = shallow(<Layout groceries={groceries} onRemoveItems={onRemoveItems} />);
    wrapper.find('.remove-items').simulate('click');
    expect(onRemoveItems).toHaveBeenCalledTimes(1);
  });
});
