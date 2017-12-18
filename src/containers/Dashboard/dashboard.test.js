import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from './dashboard';
import Groceries from '../Groceries/index';
import Meals from '../Meals/index';

describe('<SignUpForm />', () => {
  it('Renders without crashing', () => {
    shallow(<Dashboard />);
  });

  it('Renders the dashboard when user is loggedIn', () => {
    const wrapper = shallow(<Dashboard loggedIn={true}/>);
    expect(wrapper.contains(<Meals />)).toBe(true);
    expect(wrapper.contains(<Groceries />)).toBe(true);
  });

  it('Redirects when user is not loggedIn', () => {
    const wrapper = shallow(<Dashboard loggedIn={false}/>);
    expect(wrapper.contains(<Meals />)).toBe(false);
    expect(wrapper.contains(<Groceries />)).toBe(false);
  });
});
