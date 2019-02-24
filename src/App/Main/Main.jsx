import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Home from '../Page/Home/Home';
import Portfolio from '../Page/Portfolio/Portfolio';

import "./Main.scss";

export default class Main extends Component {
  
  render() {
    return (
      <main className="main-container">
        <TransitionGroup>
          <CSSTransition
            classNames="fade"
            timeout={300}
            key={this.props.location.pathname}
          >
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/portfolio" component={Portfolio} />
              <Redirect from="/" to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </main>
    )
  }
}
