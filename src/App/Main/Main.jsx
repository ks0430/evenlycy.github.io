import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from '../Page/Home/Home';
import Portfolio from '../Page/Portfolio/Portfolio';

export default class Main extends Component {
  render() {
    return (
      <main className="main-container">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    )
  }
}
