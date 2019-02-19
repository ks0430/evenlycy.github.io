import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./SubNav.scss";

const SubNav = ({onClick, data}) => {
  return (
    <Nav className="sub-nav mb-5">
      {data.map(item => 
        <NavItem key={item.id} className="sub-nav__item">
          <NavLink className="sub-nav__link" onClick={() => onClick(item)} href="#">{item.name}</NavLink>
        </NavItem>  
      )}
    </Nav>
  )
}

export default SubNav
