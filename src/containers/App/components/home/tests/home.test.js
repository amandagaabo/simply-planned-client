import React from 'react';
import {Link} from 'react-router-dom';
import {shallow} from 'enzyme';
import {Home} from '../home';

describe('<Home />', () => {
  it('Renders without crashing', () => {
    shallow(<Home />);
  });

  it('Renders Plan Meals and Make your Grocery List sections', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.contains('Plan Meals')).toEqual(true);
    expect(wrapper.contains('Make your Grocery List')).toEqual(true);
  })
});
