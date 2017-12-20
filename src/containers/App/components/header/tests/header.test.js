import React from 'react';
import { shallow } from 'enzyme';
import Header from '../header';
import Nav from '../nav';

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Header />);
  });

  it('Renders the header', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.hasClass('header')).toEqual(true);
    expect(wrapper.find(Nav)).toHaveLength(1);
  });
});
