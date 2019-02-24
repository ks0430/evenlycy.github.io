import React, { Component } from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import HeaderBrand from './HeaderBrand/HeaderBrand';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header d-flex align-items-center">
        <HeaderBrand />
        <HeaderNav />
      </header>
    )
  }
}
