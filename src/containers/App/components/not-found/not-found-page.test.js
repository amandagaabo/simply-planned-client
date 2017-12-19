import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from './not-found-page';

describe('<NotFoundPage />', () => {
  it('Renders without crashing', () => {
    shallow(<NotFoundPage  />);
  });

  it('Renders a not found message', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper.contains('Not Found')).toBe(true);
  });
});
