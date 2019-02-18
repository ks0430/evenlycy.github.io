import React, { Component } from 'react';
import './Work.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Work extends Component {

  

  onClick = () => {
    console.log("click!");
  }

  render() {
    return (
      <div className="work">
        <h2 className="subtitle">Works</h2>
        <Nav className="section-nav">
          <NavItem className="section-nav__item">
            <NavLink className="section-nav__link" onClick={this.onClick} href="#">Link1</NavLink>
          </NavItem>
          <NavItem className="section-nav__item">
            <NavLink className="section-nav__link" href="#">Link2</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
