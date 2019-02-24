import React, { Component } from 'react';
import "./HeaderNav.scss";
import Button from '../../Common/Button/Button';
import { Link } from 'react-router-dom';

export default class HeaderNav extends Component {
  navs = [
    {
      path: "home",
      value: "Home"
    },
    {
      path: "portfolio",
      value: "Portfolio"
    },
    {
      path: "contact",
      value: "Contact",
      style: "border"
    }
  ]

  render() {
    return (
      <React.Fragment>
          <ul className="headerNav ml-auto">
          {this.navs.map(item => 
            <li className="headerNav__item" key={item.path}>
              <Button 
                btnStyle={item["style"]}
              >
                <Link data-text={item.value} to={item.path}>{item.value}</Link>
              </Button>
            </li>
          )}
          </ul>
      </React.Fragment>
    )
  }
}
