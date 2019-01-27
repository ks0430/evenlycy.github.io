import React, { Component } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Page/Home/Home';
import ContainerBorder from './Common/ContainerBorder/ContainerBorder';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        {/* Header */}
        <Header />
        <main>
          <Switch>
            <Route  path="/home" component={Home} />
          </Switch>
        </main>
        <Footer />
        <ContainerBorder />
      </div>
    );
  }
}

export default App;
