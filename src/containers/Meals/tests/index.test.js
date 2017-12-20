import React from 'react';
import { shallow } from 'enzyme';
import { Meals } from '../index';

const onLoad = jest.fn();

describe('<Meals />', () => {
  it('Renders without crashing', () => {
    shallow(<Meals onLoad={onLoad} />);
  });

  it('Renders the layout when the user is loggedIn', () => {
    const loggedIn = true;
    const wrapper = shallow(<Meals onLoad={onLoad} loggedIn={loggedIn} />);
    expect(wrapper.find('Layout')).toHaveLength(1);
  });

  it('Redirects to home when the user is no loggedIn', () => {
    const loggedIn = false;
    const wrapper = shallow(<Meals onLoad={onLoad} loggedIn={loggedIn} />);
    expect(wrapper.find('Layout')).toHaveLength(0);
  });
});
