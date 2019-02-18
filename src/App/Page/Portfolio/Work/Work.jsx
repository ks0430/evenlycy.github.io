import React, { Component } from 'react';
import './Work.scss';
import { Nav, NavItem, NavLink } from 'reactstrap';
import WorkCard from '../../../Common/Card/WorkCard';

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
        <div className="work-grid">
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>
          <div className="work-grid__item">
            <WorkCard />
          </div>

        </div>
      </div>
    )
  }
}
