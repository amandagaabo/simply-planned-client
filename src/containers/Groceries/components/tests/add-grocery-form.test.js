import React from 'react';
import { shallow } from 'enzyme';
import { Field } from 'redux-form';
import { AddGroceryForm } from '../add-grocery-form';

describe('<AddGroceryForm />', () => {
  it('Renders without crashing', () => {
    const handleSubmit = jest.fn();
    shallow(<AddGroceryForm  handleSubmit={handleSubmit} />);
  });

  it('Renders the add grocery form', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<AddGroceryForm handleSubmit={handleSubmit} />);
    expect(wrapper.find('#add-grocery-form')).toHaveLength(1);
    expect(wrapper.find(Field)).toHaveLength(1);
  });

  it('Submits the login form on enter', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<AddGroceryForm handleSubmit={handleSubmit} />);
    wrapper.find('form').simulate('submit');
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
