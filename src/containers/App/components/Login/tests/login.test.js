import React from 'react';
import { shallow } from 'enzyme';
import { Redirect } from 'react-router-dom';
import { Login } from '../login';
import ReduxForm from '../login-form';

describe('<Login />', () => {
  it('Renders without crashing', () => {
    shallow(<Login />);
  });

  it('Renders log in form', () => {
    const wrapper = shallow(<Login loggedIn={false} />);
    expect(wrapper.hasClass('login-page')).toEqual(true);
    expect(wrapper.find(ReduxForm)).toHaveLength(1);
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });

  it('Redirects if user is loggedIn', () => {
    const loggedIn = true;
    const wrapper = shallow(<Login loggedIn={loggedIn} />);
    expect(wrapper.hasClass('login-page')).toEqual(false);
    expect(wrapper.find(ReduxForm)).toHaveLength(0);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
