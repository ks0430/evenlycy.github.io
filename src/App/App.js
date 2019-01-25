import React, { Component } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from './Page/Home/Home';
import ContainerBorder from './Common/ContainerBorder/ContainerBorder';
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Home />
        <Footer />
        <ContainerBorder />
      </div>
    );
  }
}

export default App;
