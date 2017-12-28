import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { SignUpForm } from './../sign-up-form';

describe('<SignUpForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<SignUpForm handleSubmit={handleSubmit} />);
  });

  it('Renders the sign up form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<SignUpForm handleSubmit={handleSubmit} />);
    expect(wrapper.contains(<h1>Sign Up</h1>)).toBe(true);
    expect(wrapper.find(Field)).toHaveLength(5);
    expect(wrapper.contains('error')).toBe(false);
  });

  it('Renders the login form with errors', () => {
    const handleSubmit = jest.fn();
    const error = 'invalid un or pw';
    const wrapper = shallow(<SignUpForm handleSubmit={handleSubmit} error={error} />);
    expect(wrapper.contains(<h1>Sign Up</h1>)).toBe(true);
    expect(wrapper.find(Field)).toHaveLength(5);
    expect(wrapper.contains(error)).toBe(true);
  });

  it('Submits the login form on submit click', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<SignUpForm handleSubmit={handleSubmit} />);
    wrapper.find('button[type="submit"]').simulate('click');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
