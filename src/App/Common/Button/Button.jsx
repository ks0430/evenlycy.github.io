import React from 'react';
import {Link} from 'react-router-dom';
import "./Button.scss";


const Button = (props) => {
  const {children, btnStyle, to, value, onClick} = props; 
  // get class name
  const classStyle = getBtnStyle(btnStyle);
  const link = to ? <Link to={to}>{value}</Link>  : null;
  return (
    <button className={classStyle} onClick={onClick}>
      {link ? link : children}
    </button>
  )
}

const getBtnStyle = (style) => {
  let className = "button";
   switch(style) {
     case "border": 
      className += " button--border";
      break;
    default:
      className += " button--link";
      break;
   }
   return className;
}


export default Button
