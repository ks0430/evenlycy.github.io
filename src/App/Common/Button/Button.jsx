import React from 'react';
import {Link} from 'react-router-dom';
import "./Button.scss";


const Button = (props) => {
  const {children, btnStyle, to, value} = props; 
  // get class name
  const classStyle = getBtnStyle(btnStyle);
  const link = to ? <Link to={to}>{value}</Link>  : null;
  return (
    <button className={classStyle}>
      {children}
      {link}
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
   console.log("classname is", className);
   return className;
}


export default Button
