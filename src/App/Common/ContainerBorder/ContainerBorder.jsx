import React from 'react';
import "./ContainerBorder.scss";

const ContainerBorder = () => {
  return (
    <div className="container-border">
        <div className="container-border__line container-border--top"></div>
        <div className="container-border__line container-border--bottom"></div>
        <div className="container-border__line container-border--left"></div>
        <div className="container-border__line container-border--right"></div>
    </div>
  )
}

export default ContainerBorder
