import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import _ from "lodash";
import "./HeaderNav.scss";

export default class HeaderNav extends Component {

  navs = [
    {
      path: "home",
      value: "Home"
    },
    {
      path: "portfolio",
      value: "Portfolio"
    }
  ]

  render() {
    return (
      <React.Fragment>
          <ul className="headerNav ml-auto">
            <li className="headerNav__item m-3">
              <Link to="home">Home</Link>
            </li>
            <li className="headerNav__item m-3">item2</li>
            <li className="headerNav__item m-3">item3</li>
          </ul>
      </React.Fragment>
    )
  }
}
