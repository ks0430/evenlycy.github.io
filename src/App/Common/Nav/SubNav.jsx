import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./SubNav.scss";

const SubNav = ({onClick, data, currentData}) => {
  console.log("test123", currentData);
  return (
    <Nav className="sub-nav mb-5">
      {data.map(item => 
        <NavItem key={item.id} className="sub-nav__item">
          <NavLink  
            className={"sub-nav__link" + (currentData.indexOf(item.id) >= 0 ? " sub-nav__link--active" : "")} 
            onClick={() => onClick(item)} 
            href="#" 
            data-text={item.name} >{item.name}
          </NavLink>
        </NavItem>  
      )}
    </Nav>
  )
}

export default SubNav
