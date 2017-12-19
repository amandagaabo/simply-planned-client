import React from 'react';
import {shallow} from 'enzyme';
import {Field} from 'redux-form';
import {LoginForm} from '../login-form';

describe('<LoginForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<LoginForm  handleSubmit={handleSubmit}/>);
  });

  it('Renders the login form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
    expect(wrapper.contains(<h1>Log In</h1>)).toBe(true);
    expect(wrapper.find(Field)).toHaveLength(2);
    expect(wrapper.contains('error')).toBe(false);
  });

  it('Renders the login form with errors', () => {
    const handleSubmit = jest.fn();
    const error = 'invalid un or pw'
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.contains(<h1>Log In</h1>)).toBe(true);
    expect(wrapper.find(Field)).toHaveLength(2);
    expect(wrapper.contains(error)).toBe(true);
  });

  it('Submits the login form on submit click', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<LoginForm handleSubmit={handleSubmit} />);
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
