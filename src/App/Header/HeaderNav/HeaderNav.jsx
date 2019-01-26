import React, { Component } from 'react';
import "./HeaderNav.scss";

export default class HeaderNav extends Component {
  render() {
    return (
      <React.Fragment>
          <ul className="headerNav p-5 ml-auto">
            <li className="headerNav__item">item1</li>
            <li className="headerNav__item">item2</li>
            <li className="headerNav__item">item3</li>
          </ul>
      </React.Fragment>
    )
  }
}
