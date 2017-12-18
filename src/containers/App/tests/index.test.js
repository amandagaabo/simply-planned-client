import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../index';
import Layout from '../components/layout'

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Layout/>)).toBe(true);
  });
});
