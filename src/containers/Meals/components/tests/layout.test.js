import React from 'react';
import {shallow} from 'enzyme';

import Layout from '../layout';

it('Renders without crashing', () => {
  shallow(<Layout meals={[]}/>);
});
