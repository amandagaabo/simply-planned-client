import React from 'react';
import {shallow} from 'enzyme';
import {Redirect} from 'react-router-dom';
import SignUp from './../sign-up';
import ReduxForm from '../sign-up-form';

describe('<SignUp />', () => {
  it('Renders without crashing', () => {
    shallow(<SignUp />);
  });

  it('Renders sign up form', () => {
    const wrapper = shallow(<SignUp loggedIn={false}/>);
    expect(wrapper.hasClass('sign-up-page')).toEqual(true);
    expect(wrapper.find(ReduxForm)).toHaveLength(1);
    expect(wrapper.find(Redirect)).toHaveLength(0);
  });

  it('Redirects if user is loggedIn', () => {
    const wrapper = shallow(<SignUp loggedIn={true}/>);
    expect(wrapper.hasClass('login-page')).toEqual(false);
    expect(wrapper.find(ReduxForm)).toHaveLength(0);
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
