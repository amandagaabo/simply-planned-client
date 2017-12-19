import React from 'react';
import {shallow} from 'enzyme';
import {App} from '../index';

describe('<App />', () => {
  const dispatch = jest.fn();

  it('Renders without crashing', () => {
    shallow(<App dispatch={dispatch}/>);
  });

  it('Renders the layout', () => {
    const wrapper = shallow(<App loggedIn={true} ready={true} dispatch={dispatch}/>);
    expect(wrapper.find('Layout')).toHaveLength(1);
  });
});
