import React from 'react';
import {shallow} from 'enzyme';
import {Groceries} from '../index';
import Layout from '../components/layout';

const onLoad = jest.fn()

describe('<Groceries />', () => {
  it('Renders without crashing', () => {
    shallow(<Groceries onLoad={onLoad} />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<Groceries onLoad={onLoad} loggedIn={true} />);
    expect(wrapper.find('Layout')).toHaveLength(1);
  });

  it('Redirects to home when the user is no loggedIn', () => {
    const wrapper = shallow(<Groceries onLoad={onLoad} loggedIn={false} />);
    expect(wrapper.find('Layout')).toHaveLength(0);
  });
});
