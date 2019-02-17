import React, { Component } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import ContainerBorder from './Common/ContainerBorder/ContainerBorder';
import "./App.scss";

class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="app">
        <Header />
        <Main location={location} />
        <Footer />
        <ContainerBorder />
      </div>
    );
  }
}

export default App;
