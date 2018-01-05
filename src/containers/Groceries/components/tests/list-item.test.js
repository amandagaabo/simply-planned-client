import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../list-item';

describe.only('Groceries <ListItem />', () => {
  const item = {
    id: 123,
    checked: true,
    name: 'bread'
  };

  it('Renders without crashing', () => {
    shallow(<ListItem item={item} />);
  });

  it('Renders item with checked square if checked', () => {
    const wrapper = shallow(<ListItem item={item} />);
    expect(wrapper.find('.box-icon').props().name).toEqual('check-square-o');
  });

  it('Renders item with open square if not checked', () => {
    item.checked = false;
    const wrapper = shallow(<ListItem item={item} />);
    expect(wrapper.find('.box-icon').props().name).toEqual('square-o');
  });

  it('Renders item with showIcon as hidden by default', () => {
    const wrapper = shallow(<ListItem item={item} />);
    expect(wrapper.find('.delete-item').hasClass('hidden')).toEqual(true);
    expect(wrapper.state('showIcon')).toEqual('hidden');
  });

  it('Shows icon during mouseEnter list item', () => {
    const wrapper = shallow(<ListItem item={item} />);
    wrapper.find('li').simulate('mouseEnter');
    expect(wrapper.find('.delete-item').hasClass('hidden')).toEqual(false);
    expect(wrapper.state('showIcon')).toEqual('');
  });

  it('Hides icon during mouseLeave list item', () => {
    const wrapper = shallow(<ListItem item={item} />);
    wrapper.find('li').simulate('mouseLeave');
    expect(wrapper.find('.delete-item').hasClass('hidden')).toEqual(true);
    expect(wrapper.state('showIcon')).toEqual('hidden');
  });

  it('Calls onToggle function when items are clicked', () => {
    const onToggle = jest.fn();
    const wrapper = shallow(<ListItem item={item} onToggle={onToggle} />);
    wrapper.find('.item-btn').simulate('click');
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it('Calls onDeleteItem function when x is clicked', () => {
    const onDeleteItem = jest.fn();
    const wrapper = shallow(<ListItem item={item} onDeleteItem={onDeleteItem} />);
    wrapper.find('.delete-item').simulate('click');
    expect(onDeleteItem).toHaveBeenCalledTimes(1);
  });
});
