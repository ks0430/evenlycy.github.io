import React, { Component } from 'react';
import "./HeaderNav.scss";
import Button from '../../Common/Button/Button';
import { Link } from 'react-router-dom';

export default class HeaderNav extends Component {
  state = {
    isCollapse: true
  }

  navs = [
    {
      path: "home",
      value: "Home"
    },
    {
      path: "portfolio",
      value: "Portfolio",
      style: "border"
    }
  ]

  handleCollapseBtn = () => {
    console.log("click!");
    this.setState({isCollapse: !this.state.isCollapse});
  }

  render() {
    return (
      <React.Fragment>
          <button className={`headerNav-collapse  ${this.state.isCollapse? "":"headerNav-collapse--active"}` } onClick={this.handleCollapseBtn}><span className="headerNav-collapse__icon">&nbsp;</span></button>
          <ul className={`headerNav ${this.state.isCollapse? "":"headerNav--active"}`}>
          {this.navs.map(item => 
            <li className="headerNav__item" key={item.path} onClick={this.handleCollapseBtn}>
              <Link data-text={item.value} to={item.path}>
                <Button btnStyle={ item["style"] }>{ item.value }</Button>
              </Link>
            </li>
          )}
          </ul>
      </React.Fragment>
    )
  }
}
