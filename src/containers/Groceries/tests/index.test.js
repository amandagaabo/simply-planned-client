import React from 'react';
import { shallow } from 'enzyme';
import { Groceries } from '../index';

const onLoad = jest.fn();

describe('<Groceries />', () => {
  it('Renders without crashing', () => {
    shallow(<Groceries onLoad={onLoad} />);
  });

  it('Renders the layout', () => {
    const loggedIn = true;
    const wrapper = shallow(<Groceries onLoad={onLoad} loggedIn={loggedIn} />);
    expect(wrapper.find('Layout')).toHaveLength(1);
  });

  it('Redirects to home when the user is no loggedIn', () => {
    const loggedIn = false;
    const wrapper = shallow(<Groceries onLoad={onLoad} loggedIn={loggedIn} />);
    expect(wrapper.find('Layout')).toHaveLength(0);
  });
});
