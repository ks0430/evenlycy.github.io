import React, { Component } from 'react';
import HeaderNav from './HeaderNav/HeaderNav';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
            <HeaderNav />
        </header>
      </div>
    )
  }
}
