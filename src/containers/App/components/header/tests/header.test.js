import React from 'react';
import {shallow} from 'enzyme';
import Header from '../header';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header')).toEqual(true);
  });
});
