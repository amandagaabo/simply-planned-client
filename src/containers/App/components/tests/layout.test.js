import React from 'react';
import {shallow} from 'enzyme';
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom';
import Layout from '../layout';
import Header from '../header/header';
import Home from '../home/home';
import Login from '../login/login';
import SignUp from '../sign-up/sign-up';
import Dashboard from '../../../../containers/Dashboard/dashboard';
import NotFoundPage from '../not-found/not-found-page';

describe('App <Layout />', () => {
  it('Renders without crashing', () => {
    shallow(<Layout  />);
  });

  it('Redirects to not found page on invalid path', () => {
    const wrapper = shallow(<Layout />);
    const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});

    expect(pathMap['undefined']).toBe(NotFoundPage);
  });
});
