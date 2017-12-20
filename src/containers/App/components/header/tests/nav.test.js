import React from 'react';
import { shallow } from 'enzyme';
import { Nav } from '../nav';

describe('<Nav />', () => {
  const loggedIn = true;

  it('Renders without crashing', () => {
    shallow(<Nav />);
  });

  it('Renders log out link if user is loggedIn and pathname is /dashboard', () => {
    const wrapper = shallow(<Nav loggedIn={loggedIn} pathname="/dashboard" />);
    expect(wrapper.contains('Log Out')).toEqual(true);
    expect(wrapper.contains('Dashboard')).toEqual(false);
    expect(wrapper.contains('Sign Up')).toEqual(false);
    expect(wrapper.contains('Log In')).toEqual(false);
  });

  it('Renders log out and dashboard links if user is loggedIn and pathname is not /dashboard', () => {
    const wrapper = shallow(<Nav loggedIn={loggedIn} pathname="/" />);
    expect(wrapper.contains('Log Out')).toEqual(true);
    expect(wrapper.contains('Dashboard')).toEqual(true);
    expect(wrapper.contains('Sign Up')).toEqual(false);
    expect(wrapper.contains('Log In')).toEqual(false);
  });

  it('Renders sign up link if user is not loggedIn and pathname is /login', () => {
    const wrapper = shallow(<Nav loggedIn={false} pathname="/login" />);
    expect(wrapper.contains('Sign Up')).toEqual(true);
    expect(wrapper.contains('Log In')).toEqual(false);
    expect(wrapper.contains('Dashboard')).toEqual(false);
    expect(wrapper.contains('Log Out')).toEqual(false);
  });

  it('Renders log in link if user is not loggedIn and pathname is not /login', () => {
    const wrapper = shallow(<Nav loggedIn={false} pathname="/sign-up" />);
    expect(wrapper.contains('Sign Up')).toEqual(false);
    expect(wrapper.contains('Log In')).toEqual(true);
    expect(wrapper.contains('Dashboard')).toEqual(false);
    expect(wrapper.contains('Log Out')).toEqual(false);
  });

  it('Logs the user out when log out is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = shallow(<Nav loggedIn={loggedIn} pathname="/dashboard" dispatch={dispatch} />);
    wrapper.find('.header-link').simulate('click');
    expect(dispatch).toHaveBeenCalledTimes(2);
  });
});
