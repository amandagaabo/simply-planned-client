import React from 'react';
import { shallow } from 'enzyme';
import { App } from '../index';

describe('<App />', () => {
  const dispatch = jest.fn();

  it('Renders without crashing', () => {
    shallow(<App dispatch={dispatch} />);
  });

  it('Renders the layout', () => {
    const loggedIn = true;
    const ready = true;
    const wrapper = shallow(<App loggedIn={loggedIn} ready={ready} dispatch={dispatch} />);
    expect(wrapper.find('Layout')).toHaveLength(1);
  });
});
