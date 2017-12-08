import React from 'react';
import {Icon} from 'react-fa';

import Groceries from '../Groceries/index';
import Meals from '../Meals/index';

import './dashboard.css'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideBar: true
    };

    this.onToggleSideBar = this.onToggleSideBar.bind(this);
  };

  onToggleSideBar() {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  render () {
    return (
      <main role="main">
        <section className={this.state.showSideBar ? "meals-container meals-container__with-sidebar" : "meals-container"}>
          <div className={this.state.showSideBar ? "toggle-side-bar toggle-side-bar__with-sidebar" : "toggle-side-bar"}
            onClick={this.onToggleSideBar}>
            <Icon name="chevron-left" />
          </div>

          <Meals />
        </section>

        <section className={this.state.showSideBar ? "groceries-side-bar groceries-side-bar__visible" : "groceries-side-bar"}>
          <Groceries />
        </section>
      </main>
    );
  }
};
