import React from 'react';
import {Redirect} from 'react-router-dom';
import {Icon} from 'react-fa';

import Groceries from '../Groceries/index';
import Meals from '../Meals/index';

import './dashboard.css'

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideBar: false
    };

    this.onToggleSideBar = this.onToggleSideBar.bind(this);
  };

  onToggleSideBar() {
    this.setState({
      showSideBar: !this.state.showSideBar
    })
  }

  render () {
    if (!this.props.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <main role="main" className="dashboard">
        <section className={this.state.showSideBar ? "meals-container meals-container__with-sidebar " : "meals-container"}>
          <Meals />
        </section>

        <section className={this.state.showSideBar ? "groceries-side-bar groceries-side-bar__visible x-light-green-background" : "groceries-side-bar x-light-green-background"}>
          <div className={this.state.showSideBar ? "toggle-side-bar toggle-side-bar__with-sidebar" : "toggle-side-bar"}
            onClick={this.onToggleSideBar}>
            <Icon name="chevron-left" />
          </div>

          <Groceries />
        </section>
      </main>
    );
  }
};
