import React from 'react';
import "./Button.scss";


const Button = (props) => {
  const {children, btnStyle, onClick} = props; 
  // get class name
  const classStyle = getBtnStyle(btnStyle);
  console.log("test",children);
  return (
    <button className={classStyle}  data-text={children} onClick={onClick}>
      {children}
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
