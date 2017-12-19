import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../index';

describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<App />);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<App loggedIn={true} ready={true}/>);
    expect(wrapper.find('Layout')).toHaveLength(1);
  });
});
