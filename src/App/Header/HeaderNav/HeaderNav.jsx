import React, { Component } from 'react';
import "./HeaderNav.scss";
import Button from '../../Common/Button/Button';

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
      path: "blog",
      value: "Blog"
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
                to={item.path}
                value={item.value}
              />
            </li>
          )}
          </ul>
      </React.Fragment>
    )
  }
}
