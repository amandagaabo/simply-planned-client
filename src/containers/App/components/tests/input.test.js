import React from 'react';
import { shallow } from 'enzyme';
import Input from '../input';

describe('<Input />', () => {
  it('Renders without crashing', () => {
    shallow(<Input meta="" input="" />);
  });

  it('Renders form input field', () => {
    const wrapper = shallow(<Input meta="" input="" />);
    expect(wrapper.hasClass('form-input')).toEqual(true);
  });
});
