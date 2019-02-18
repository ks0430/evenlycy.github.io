import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';


const SubNav = ({onClick}) => {
  return (
    <Nav className="sub-nav">
      <NavItem className="sub-nav__item">
        <NavLink className="sub-nav__link" onClick={onClick} href="#">Link1</NavLink>
      </NavItem>
      <NavItem className="sub-nav__item">
        <NavLink className="sub-nav__link" href="#">Link2</NavLink>
      </NavItem>
    </Nav>
  )
}

export default SubNav
